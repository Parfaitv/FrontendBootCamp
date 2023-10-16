import React, { useRef, useCallback, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { getPokemon } from './http/api';
import PokemonList from './component/PokemonList';



const App = () => {
  const inputRef = useRef()
  const [cardArray, setCardArray] = useState([]);

  const searchPokemon = async () => {
    try {
      if(!inputRef) return alert("Введите название покемона")
      const getAllPokemon = await getPokemon()
      const filterPokemon = getAllPokemon.results.filter(data => data.name === inputRef.current.value);
      if(filterPokemon.length === 0) return alert("Такой покемон не найден. \nПопробуйте charmander!")
      const getInfoPokemon = await fetch(filterPokemon[0].url)
      const data = await getInfoPokemon.json()

      const newArray = [...cardArray, data]
      setCardArray(newArray)
    } catch (error) {
      alert("Не предвиденная ошибка")
    }
  }
  
  const removePokemon = useCallback((index) => {
    const filterArray = cardArray.filter((pokemon, i) => i !== index)
    setCardArray(filterArray)
  },[cardArray])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <Form.Group className="mt-3 d-flex justify-content-center align-items-center">
          <Form.Control
            ref={inputRef}
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
      {cardArray.length !== 0 ?
        <PokemonList cardArray={cardArray} removePokemon={removePokemon}/>
        :
        <>
          <h1 className='mt-3 d-flex justify-content-center align-items-center'>Pokemons</h1>
          <ul className='mt-3 d-flex justify-content-center align-items-center flex-column'>
            <li>charmander</li>
            <li>bulbasaur</li>
            <li>squirtle</li>
          </ul>
        </>
      }
    </>
  );
}

export default React.memo(App);