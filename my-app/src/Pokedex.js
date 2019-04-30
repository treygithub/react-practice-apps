import React, { Component } from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    
    render(){
		const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        return(
            <React.Fragment>
			
				<div className="Pokedex-cards">
					{this.props.pokemon.map((item)=>(
						<Pokecard
						id={item.id}
						name={item.name}
						type={item.type}
						exp={item.base_experience}
						POKE_API={POKE_API}
					/>
					))}
				</div>
			</React.Fragment>
        );
    };
};

export default Pokedex;