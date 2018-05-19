import React, { Component } from 'react';

class OneDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	details = () => {
		let modal = document.getElementById('myModal');
		let img = document.getElementById('myImg');
		let modalImg = document.getElementById("img01");
		let captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = this.props.image;
    captionText.innerHTML = this.props.name;
	}

	close = () => {
		let modal = document.getElementById('myModal');
		modal.style.display = "none";
	}

	render() {
		return (
			<div>
				<p onClick={this.details.bind(this)}>{this.props.name}</p>

				<div id="myModal" class="modal">
				  <span className="close" onClick={this.close.bind(this)}>&times;</span>
				  <img className="modal-content" id="img01" />
				  <div id="caption"></div>
				</div>
			</div>
		)
	}
}

export default OneDrink;