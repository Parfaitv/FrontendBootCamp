import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import styles from './mystyle.module.css';
import useTheme from '../hooks/useTheme';

const PokemonList = ({ cardArray, removePokemon }) => {
    const {isLight} = useTheme()
    return (
        cardArray.map((pokemonInfo, i) => (
            <div key={i} className='d-flex justify-content-between align-items-center m-5'>
                <Card style={{ width: '18rem'}} className={!isLight ? 'darkCard' : ''}>
                    <Card.Body className={`d-flex justify-content-center align-items-center ${!isLight ? 'darkCard' : ''}`}>
                        <Card.Title>{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={pokemonInfo.sprites.front_default} style={{ height: '15rem' }} />
                    <ListGroup className='list-group-flush'>
                        <ListGroup.Item
                        className={!isLight ? 'darkCard' : ''}
                        >Количество форм {pokemonInfo.forms.length}</ListGroup.Item>
                        {pokemonInfo.forms.map((form, i) => (
                            <ListGroup.Item 
                            className={!isLight ? 'darkCard' : ''}
                            key={i}
                            >{form.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
                <span
                    className={`material-symbols-outlined ${styles.deleted}`}
                    onClick={() => removePokemon(i)}
                >
                    delete_forever
                </span>
            </div>
        ))
    )
}

export default React.memo(PokemonList)
