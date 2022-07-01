import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from '../pokecard/Pokecard.js'

class Pokedex extends Component {

    // static defaultProps = {
    //     pokemon : [
    //         {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //         {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //         {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //         {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //         {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //         {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    //       ]
    // };

    render() {

        let title;
        let gameHandClass;

        if(this.props.isWinner){
            title = <h1 className='Pokedex-winner'>WINNING HAND</h1>
            gameHandClass = 'Pokedex-card-holder Pokedex-winner-container';
        }else{
            title = <h1 className='Pokedex-loser'>LOSING HAND</h1>
            gameHandClass = 'Pokedex-card-holder Pokedex-loser-container';
        }

        return (
            <div className='Pokedex'>
                {title}
                <p>Total EXP: {this.props.exp}</p>
                <div className={gameHandClass}>
                    {this.props.pokemon.map((p) => (
                        <Pokecard key={p.name} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Pokedex;