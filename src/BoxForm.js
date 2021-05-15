import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class BoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: '', width: '', color: '' };
	}
	handleChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value
		});
	handleSubmit = (e) => {
		e.preventDefault();
		let newBox = { ...this.state, id: uuidv4() };
		this.props.addBox(newBox);
		this.setState({
			height: '',
			width: '',
			color: ''
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="BoxForm">
				<div>
					<label htmlFor="height">Height: </label>
					<input id="height" name="height" value={this.state.height} onChange={this.handleChange} />
				</div>
				<div>
					<label htmlFor="width">Width: </label>
					<input id="width" name="width" value={this.state.width} onChange={this.handleChange} />
				</div>
				<div>
					<label htmlFor="color">Color: </label>
					<input id="color" name="color" value={this.state.color} onChange={this.handleChange} />
				</div>
				<button>Make Box</button>
			</form>
		);
	}
}

export default BoxForm;
