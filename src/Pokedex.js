import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const axios = require('axios');

const randomPokemon = async (number = 807) => {
	const randomId = Math.floor(Math.random() * number) + 1;
	const response = await axios
		.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
		.then((response) => {
			return response.data;
		});
	return response;
};

function generatePokedex() {
	let arr = [];

	for (let i = 0; i < 9; i++) {
		randomPokemon().then((data) => {
			arr.push({
				id: data.id,
				name: data.name,
				type: data.types[0].type.name,
				exp: data.base_experience
			});
		});
	}
	console.log('###ARR', arr);
	return arr;
}
generatePokedex();
class Pokedex extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};
	render() {
		return (
			<div className="Pokedex">
				<h1 className="header">Pokedex!</h1>
				<div className="container">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
