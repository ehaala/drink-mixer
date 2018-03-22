import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

var drinks = require('./drinks.json');

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drinks: []
		}

		this.mixDrink = this.mixDrink.bind(this);
	}

	mixDrink() {
		let results = [];
		for (var i=0; i<drinks.length; i++) {
			let arr = drinks[i].ingredients;
			if (arr.includes(this.props.iOne) && arr.includes(this.props.iTwo)) {
				results.push(drinks[i]);
			}
		}
		this.setState({
			drinks: results
		})
	}

	render () {
		return (
			<Row>
				<Button bsStyle="info" onClick={this.mixDrink}>Mix!</Button>
				<hr />
				<img className="ingredientPic" src={this.state.drinks.length > 0 && this.state.drinks[0].image} />
			</Row>
		)
	}
}

export default Result;