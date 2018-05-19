import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';

import OneDrink from './OneDrink';

let drinks = require('./drinks.json');

class AllDrinks extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<Row>
			<Col sm={1}></Col>
			<Col xs={12} sm={10}>
				<Row>
					{drinks.map((drink, i) => 
						<Col xs={6} sm={4} key={'drink_' + i}>
							<OneDrink name={drink.name} image={drink.image} />
						</Col>
					)}
				</Row>
			</Col>
			<Col sm={1}></Col>
			</Row>
		)
	}
}

export default AllDrinks;