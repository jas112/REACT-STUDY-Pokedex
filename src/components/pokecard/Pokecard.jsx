import React, { Component } from 'react';
import './Pokecard.css';


const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function idCheck(idValue){

    let isIdCorrectFormat = false;

    if(idValue.toString().length() === 3){
        isIdCorrectFormat = true;
        return isIdCorrectFormat;
    }

    return isIdCorrectFormat;

}

function formatId(idValue){

    let preStr = ''
    let limit = 3 - idValue.toString().length();

    if(limit = 0){
        return preStr += idValue.toString();
    }
    
    if(limit > 0){
        for(var i = 0; i < limit; i++){
            preStr += '0';
        }
        return preStr += idValue.toString();
    }

}

function generateImgSrc(rootURL, IdValue){
    if(idCheck(idValue)){
        return rootURL + Idvalue.toString() + '.png';
    }else{
        let formattedIdStr = formatId(idValue);
        return rootURL + formattedIdStr + '.png';
    }
}

function genImgSrc(rootURL, idValue){
    if(idValue <= 999){
        return rootURL + `00${idValue}`.slice(-3) + '.png';
    }else{
        return rootURL + idValue.toString() + '.png';
    }
}

class Pokecard extends React.Component{
    render(){
        
        const pokemon = this.props;
        console.log(pokemon);

        let thisIdValue = this.props.id;
        console.log(`thisIdValue: ${thisIdValue}`);

        let imageSrc = genImgSrc(IMG_URL, thisIdValue);
        console.log(`imageSrc: ${imageSrc}`);

        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-tile'>{this.props.name}</h1>
                <img className='Pokecard-img' src={ imageSrc } alt={this.props.name} />
                <div className='Pokecard-data'>Type: {this.props.type}</div> 
                <div className='Pokecard-data'>Exp: {this.props.base_experience}</div> 
            </div>
        )
    }
}