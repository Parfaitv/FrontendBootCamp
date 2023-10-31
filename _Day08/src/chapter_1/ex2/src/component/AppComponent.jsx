import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getPokemon } from '../http/api';
import PokemonList from './PokemonList';
import PokemonExamle from './PokemonExamle';
import useTheme from '../hooks/useTheme';


const AppComponent = () => {
    const inputRef = useRef()
    const [cardArray, setCardArray] = useState([]);
    const {isLight, setIsLight} = useTheme()

    useEffect(() => {
        const fetchData = async () => {
            const allPokemon = await getPokemon()
            console.log(allPokemon);
            localStorage.setItem('pokemon', JSON.stringify(allPokemon))
        }
        fetchData()
    }, [])

    const searchPokemon = async () => {
        try {
            if (!inputRef) return alert("Введите название покемона")
            const getAllPokemon = JSON.parse(localStorage.getItem('pokemon'))
            const filterPokemon = getAllPokemon.results.filter(data => data.name === inputRef.current.value);
            if (filterPokemon.length === 0) return alert("Такой покемон не найден. \nПопробуйте charmander!")
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
    }, [cardArray])

    return (
        <>
            <Form.Check
                className="outline m-3 mt-0 d-flex justify-content-end align-items-center"
                type='switch'
                onChange={() => setIsLight(!isLight)}
                label={isLight ? 'Dark theme' : 'White theme'}
            />
            
            <div className='d-flex justify-content-center align-items-center '>
                <Form.Group className="d-flex justify-content-center align-items-center">
                    <Form.Control
                        className={`${isLight ? 'lightInput' : 'darkInput'} outline`}
                        ref={inputRef}
                        placeholder="pokemon"
                        />
                    <Button
                        onClick={searchPokemon}
                        variant={isLight ? 'outline-success' : 'success'}
                        >
                        Найти
                    </Button>
                </Form.Group>
            </div>
            {cardArray.length !== 0 ?
                <PokemonList cardArray={cardArray} removePokemon={removePokemon} />
                :
                <PokemonExamle />
            }
        </>
    );
}

export default React.memo(AppComponent)