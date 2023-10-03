import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { createOrder, allUser, allMenu } from '../http/allApi';
import Select from 'react-select';
import { ButtonGroup, Button } from 'react-bootstrap';


const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#212529" : "#fff",
    backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#212529",
    width: "550px",
    margin: "7px 0px 2px 0px",
    padding: "10px",
    border: "none",
    boxShadow: "none",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};


const OrderPage = () => {
  const navigate = useNavigate()
  const [itemsCollection, setItems] = useState([]);
  const [userCollection, setUser] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const getAllUser = async () => {
      const data = await allUser();
      setUser(data.sort((a, b) => a.id - b.id))
    }
    getAllUser()
    const getAllItems = async () => {
      const data = await allMenu();
      data.map((e, i) => e.count = i)
      setItems(data.sort((a, b) => a.id - b.id))
    }
    getAllItems()
  }, [])

  const submitAndCreate = async () => {
    try {
      if(userId && selectedOption) {
        const items = selectedOption.map(e => {
          return e.id
        })
        const create = await createOrder(userId.id, items);
        if(create) {
          navigate(`/orders/${create.id}`)
        }
    }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const handleItems = (selectedOptions) => {
    setSelectedOption(selectedOptions);
  }
  
  const handleUser = (selectedOptions) => {
    setUserId(selectedOptions);
  }

  const onclick = () => {
    let newArray = [];
    for (let i = 0; i < itemsCollection.length; i++) {
      const newObj = { ...itemsCollection[i] };
      newObj.count = itemsCollection[itemsCollection.length-1].count + i + 1;
      newArray.push(newObj);
    }
    newArray = [...newArray].sort((a, b) => a.id - b.id)
    setItems(newArray)
  }

  return (
    <div className='d-flex justify-content-between align-items-center flex-column'>
      <Select
        placeholder='Выберите официанта'
        options={userCollection}
        value={userId}
        onChange={handleUser}
        getOptionValue={e => e.id}
        getOptionLabel={e => "Официант " + e.id}
        styles={customStyles}
      />
      <Select
        placeholder='Выберите блюдо'
        isMulti
        options={itemsCollection}
        value={selectedOption}
        onChange={handleItems}
        getOptionValue={e => e.count}
        getOptionLabel={e => e.title}
        styles={customStyles}
      />
      <ButtonGroup className='d-flex justify-content-between align-items-center'>
        <Button className='m-3 ' variant='success' onClick={onclick}>Add new selected</Button>
        <Button variant='success' onClick={submitAndCreate}>Create order</Button>
      </ButtonGroup>
    </div>
  )
}

export default OrderPage
