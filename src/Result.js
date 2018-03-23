import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

let drinks = require('./drinks.json');

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drinks: [],
			index: 0
		}

		this.mixDrink = this.mixDrink.bind(this);
	}

	mixDrink() {
		let results = [];
		let random = 0;
		for (var i=0; i<drinks.length; i++) {
			let arr = drinks[i].ingredients;
			if (arr.includes(this.props.iOne) && arr.includes(this.props.iTwo)) {
				results.push(drinks[i]);
			}
			random = Math.floor(Math.random()*(results.length));
		}
		this.setState({
			drinks: results,
			index: random
		})
	}

	render () {
		return (
			<Row>
				<Button bsStyle="info" onClick={this.mixDrink}>Mix!</Button>
				<br />
				<p>{this.state.drinks.length} result(s)</p>
				<hr />
				<img className="ingredientPic" src={this.state.drinks.length > 0 && this.state.drinks[this.state.index].image} />
			</Row>
		)
	}
}

export default Result;