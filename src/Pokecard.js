import React, { Component } from 'react';
import './Pokecard.css';
// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const ALT_POKE_API = 'https://pokeres.bastionbot.org/images/pokemon/';

class Pokecard extends Component {
	render() {
		// let imgSrc = `${POKE_API}${('00' + this.props.id).substring(this.props.id.length)}.png`;
		let altImgSrc = `${ALT_POKE_API}${this.props.id}.png`;
		let cardClasses = 'Pokecard__item';
		if (+this.props.exp > 200) {
			cardClasses += ' Pokecard__item-exp-200';
		} else if (+this.props.exp > 100) {
			cardClasses += ' Pokecard__item-exp-100';
		} else if (+this.props.exp > 50) {
			cardClasses += ' Pokecard__item-exp-50';
		} else {
			cardClasses += ' Pokecard__item-low-exp';
		}
		return (
			<div className="Pokecard">
				<h2>{this.props.name}</h2>
				{/* <img
					className="Pokecard__img"
					src={imgSrc}
					lowsrc={altImgSrc}
					alt={this.props.name}
					onerror="this.style.display='none'"
				/> */}
				<img className="Pokecard__img-alt" src={altImgSrc} alt={this.props.name} />
				<ul className="Pokecard__desc">
					<li className={`Pokecard__item Pokecard__item-${this.props.type}`}>
						Type: {this.props.type}
					</li>
					<li className={cardClasses}>EXP: {this.props.exp}</li>
				</ul>
			</div>
		);
	}
}

export default Pokecard;
