import React, { Component } from 'react';
import Pokedex from '../pokedex/Pokedex';
import './Pokegame.css';

class Pokegame extends Component{

    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    render(){

        let fullRoster = [...this.props.pokemon];
        let hand_1 = [];
        let hand_2 = [];

        while(fullRoster.length > 0){
            let random_pick_idx_1 = Math.floor(Math.random() * fullRoster.length);
            let randPokemon1 = fullRoster.splice(random_pick_idx_1, 1)[0];
            hand_1.push(randPokemon1);
            let random_pick_idx_2 = Math.floor(Math.random() * fullRoster.lengthS);
            let randPokemon2 = fullRoster.splice(random_pick_idx_2, 1)[0];
            hand_2.push(randPokemon2);
        }

        console.log('hand 1:');
        console.log(hand_1);
        console.log('hand 2:');
        console.log(hand_2);

        let hand1Exp = hand_1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let hand2Exp = hand_2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        console.log(`hand1Exp: ${hand1Exp}`);
        console.log(`hand2Exp: ${hand2Exp}`);

        return (
            <div className='Pokegame'>
                <h1>POKEGAME!!!</h1>
                <div className='Pokegame-hand-holder'>
                    <Pokedex name='Hand 1' pokemon={hand_1} exp={hand1Exp} isWinner={hand1Exp > hand2Exp} />
                    <Pokedex name='Hand 2' pokemon={hand_2} exp={hand2Exp} isWinner={hand2Exp > hand1Exp} />
                </div>
            </div>
        )
    }
}

export default Pokegame;