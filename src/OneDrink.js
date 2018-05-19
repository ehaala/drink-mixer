import React, { Component } from 'react';

class OneDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	mouseOver = () => {
		this.setState({
			hover: true
		})
	}

	mouseOut = () => {
		this.setState({
			hover: false
		})
	}

	render() {
		return (
			<div>
				<p onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>{this.props.name}</p>
				{this.state.hover ? (<img src={this.props.image} className="hoverPic"/>) : null}
			</div>
		)
	}
}

export default OneDrink;