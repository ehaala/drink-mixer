import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

import Result from './Result';

const styles = {
	padding: '20px'
}
let ingredients = require('./ingredients.json');

class SelectOptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredientOne: "",
			backOne: "",
			ingredientTwo: "",
			backTwo: ""
		}

		this.selectIngredientOne = this.selectIngredientOne.bind(this);
		this.selectIngredientTwo = this.selectIngredientTwo.bind(this);
	}

	selectIngredientOne(e) {
		if (e.target.name == 'ingredientOne') {
			this.setState({
				ingredientOne: e.target.value
			});
	    for (var i=0; i < ingredients.length; i++) {
        if (ingredients[i].name === e.target.value) {
      		this.setState({
      			backOne: ingredients[i].url
      		})
        }
	    }
		}
	}

	selectIngredientTwo(e) {
		if (e.target.name == 'ingredientTwo') {
			this.setState({
				ingredientTwo: e.target.value
			})
	    for (var i=0; i < ingredients.length; i++) {
        if (ingredients[i].name === e.target.value) {
      		this.setState({
      			backTwo: ingredients[i].url
      		})
        }
	    }
		}
	}

	render() {
		return (
			<Row>
				<Col sm={1}></Col>
				<Col xs={6} sm={3}>
	      	<fieldset>
	      		<label htmlFor="ingredientOne">Alcoholic</label>
	      		<br />
	      		<select id="ingredientOne" name="ingredientOne" value={this.state.ingredientOne} onChange={this.selectIngredientOne}>
	      			<option value="null" id="null">Select Type</option>
	      			<option value="Vodka" id="Vodka">Vodka</option>
	      			<option value="Gin" id="Gin">Gin</option>
	      		</select>
	      	</fieldset>
	      	<hr />
	      	<img className="ingredientPic" src={this.state.backOne} />
				</Col>

				<Col xs={6} sm={3} smPush={4}>
	      	<fieldset>
	      		<label htmlFor="ingredientTwo">Non-Alcoholic</label>
	      		<br />
	      		<select id="ingredientTwo" name="ingredientTwo" value={this.state.ingredientTwo} onChange={this.selectIngredientTwo}>
	      			<option value="null" id="null">Select Type</option>
	      			<option value="Orange Juice" id="Orange Juice">Orange Juice</option>
	      			<option value="Pineapple Juice" id="Pineapple Juice">Pineapple Juice</option>
	      			<option value="Red Bull" id="Red Bull">Red Bull</option>
	      		</select>
	      	</fieldset>
	      	<hr />
	      	<img className="ingredientPic" src={this.state.backTwo} />
				</Col>

				<Col xs={12} sm={4} smPull={3}>
					<Result iOne={this.state.ingredientOne} iTwo={this.state.ingredientTwo} />
				</Col>

				<Col sm={1}></Col>
			</Row>
		)
	}
}

export default SelectOptions;