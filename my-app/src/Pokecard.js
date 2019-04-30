import React, { Component } from "react";
import './Pokecard.css'


class Pokecard extends Component{
    
    render(){
    const {name,id,exp,type, POKE_API} = this.props
    const imgSRC = `${POKE_API}${id}.png`
        return(
            <div className="Pokecard-card">
                <h3 className="Pokecard-name">{name}</h3>
                <div className="Pokecard-divIMG">
                    <img className="Pokecard-img" src={imgSRC} alt={name}/>
                </div>
                <div className="Pokecard-type">Type: {type}</div>
                <div className="Pokecard-exp">Experience: {exp}</div>
            </div>

        );
    };
};

export default Pokecard;