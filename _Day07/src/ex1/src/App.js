import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { getPokemon } from './http/api';
import PokemonList from './component/PokemonList';



const App = () => {
  const [allPokemon, setAllPokemon] = useState({});
  const [search, setSearch] = useState('');
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const data = await getPokemon()
        setAllPokemon(data)
      } catch (error) {
        alert("error")
      }
    };
    getAllPokemon();
  }, [])

  const searchPokemon = async () => {
    try {
      if(!search) return alert("Введите название покемона")
      const filterPokemon = allPokemon.results.filter(data => data.name === search);
      if(filterPokemon.length === 0) return alert("Такой покемон не найден. \nПопробуйте metapod!")
      const getInfoPokemon = await fetch(filterPokemon[0].url)
      const data = await getInfoPokemon.json()
      console.log(data);
      const newArray = [...cardArray, data]
      setCardArray(newArray)
    } catch (error) {
      alert("Не предвиденная ошибка")
    }
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <Form.Group className="mt-3 d-flex justify-content-center align-items-center">
          <Form.Control
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="pokemon"
          />
          <Button
            onClick={searchPokemon}
            variant='outline-success'
          >
            Найти
          </Button>
        </Form.Group>
      </div>
      {cardArray &&
        <PokemonList cardArray={cardArray} setCardArray={setCardArray}/>
      }
    </>
  );
}

export default App;
