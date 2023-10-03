import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { createOrder, allMenu } from '../http/allApi';
import Select from 'react-select';
import NotAuth from './NotAuth';
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
  const [token, setToken] = useState({});
  const [selectedOption, setSelectedOption] = useState([]);
  useEffect(() => {
    let local = localStorage.getItem('token')
    let localParse = JSON.parse(local)
    setToken(localParse)

    const getAllItems = async () => {
      const data = await allMenu();
      data.map((e, i) => e.count = i)
      setItems(data.sort((a, b) => a.id - b.id))
    }
    getAllItems()
  }, [])
  const submitAndCreate = async () => {
    try {
      if(selectedOption) {
        const items = selectedOption.map(e => {
          return e.id
        })
        const create = await createOrder(token.id, items);
        token.orders.push(create.id)
        localStorage.clear()
        localStorage.setItem('token', JSON.stringify(token))
        navigate(`/orders/${create.id}`)
      }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }
  const handleItems = (selectedOptions) => {
    setSelectedOption(selectedOptions);
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

  if(!token) {
    return (
      <NotAuth />
    )
  }

  return (
    <>
      {
      token.role === "USER" ?
          <div className='d-flex justify-content-between align-items-center flex-column'>
          <Select
            placeholder={`${token.name}`}
            isDisabled
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
        :
        <div style={{height:"50vh"}} className="d-flex align-items-center justify-content-center">
          <h1>Админ не может создать заказ!</h1>
        </div>
      }
    </>
  )
}

export default OrderPage
