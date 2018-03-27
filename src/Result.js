import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

const styles = {
	background: 'rgba(0,0,0,.5)',
	padding: '20px',
	border: 'solid black 1px',
}
let drinks = require('./drinks.json');

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drinks: [],
			index: 0
		}

		this.mixDrink = this.mixDrink.bind(this);
		this.nextDrink = this.nextDrink.bind(this);
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
			drinks: results,
			index: 0
		})
	}

	nextDrink() {
		let drinks = this.state.drinks;
		let i = this.state.index;
		i++;
		if (i < drinks.length) {
			this.setState({
				index: i
			})
		} else if (i === drinks.length) {
			this.setState({
				index: 0
			})
		}
	}

	render () {
		return (
			<Row style={styles}>
				<Button bsStyle="info" onClick={this.mixDrink}>Mix!</Button>
				<br />
				{this.state.drinks.length > 0 && <p>Results: {this.state.index + 1} of {this.state.drinks.length}</p>}
				<hr />
				<img className="ingredientPic" src={this.state.drinks.length > 0 && this.state.drinks[this.state.index].image} />
				<hr />
				<Button bsStyle="info" onClick={this.nextDrink}>Next!</Button>
			</Row>
		)
	}
}

export default Result;