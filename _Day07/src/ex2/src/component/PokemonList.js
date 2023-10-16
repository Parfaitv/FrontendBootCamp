import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import styles from './mystyle.module.css';

const PokemonList = ({ cardArray, removePokemon }) => {
    return (
        cardArray.map((pokemonInfo, i) => (
            <div key={i} className='d-flex justify-content-between align-items-center m-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body className='d-flex justify-content-center align-items-center'>
                        <Card.Title>{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={pokemonInfo.sprites.front_default} style={{ height: '15rem' }} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Количество форм {pokemonInfo.forms.length}</ListGroup.Item>
                        {pokemonInfo.forms.map((form, i) => (
                            <ListGroup.Item key={i}>{form.name}</ListGroup.Item>
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
