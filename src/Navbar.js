import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
	height: '40px',
	padding: '5px',
	background: 'black',
	fontSize: '20px',
	fontFamily: 'Frijole',
	borderBottom: 'solid 1px #E5008D'
}

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div style={styles}>
				<Link className="padding" to="/">Home</Link>
				<Link className="padding" to="/alldrinks">All Drinks</Link>
			</div>
		)
	}
}

export default Navbar;