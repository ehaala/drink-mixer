import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

var ingredients = require('./ingredients.json');

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
				<Col xs={12} sm={6}>
	      	<fieldset>
	      		<label for="ingredientOne">Alcoholic</label>
	      		<br />
	      		<select id="ingredientOne" name="ingredientOne" value={this.state.ingredientOne} onChange={this.selectIngredientOne}>
	      			<option value="null" id="null">Select Type</option>
	      			<option value="Vodka" id="Vodka">Vodka</option>
	      		</select>
	      	</fieldset>
	      	<h3>{this.state.ingredientOne}</h3>
	      	<img className="ingredientPic" src={this.state.backOne} />
				</Col>

				<Col xs={12} sm={6}>
	      	<fieldset>
	      		<label for="ingredientTwo">Non-Alcoholic</label>
	      		<br />
	      		<select id="ingredientTwo" name="ingredientTwo" value={this.state.ingredientTwo} onChange={this.selectIngredientTwo}>
	      			<option value="null" id="null">Select Type</option>
	      			<option value="Orange Juice" id="Orange Juice">Orange Juice</option>
	      		</select>
	      	</fieldset>
	      	<h3>{this.state.ingredientTwo}</h3>
	      	<img className="ingredientPic" src={this.state.backTwo} />
				</Col>
			</Row>
		)
	}
}

export default SelectOptions;