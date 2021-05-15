import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = { boxes: [] };
	}
	addBox = (newBox) => {
		this.setState({
			boxes: [ ...this.state.boxes, newBox ]
		});
	};
	removeBox = (id) => {
		this.setState({
			boxes: this.state.boxes.filter((box) => box.id !== id)
		});
	};
	render() {
		const boxes = this.state.boxes.map((box) => {
			return (
				<Box
					handleClick={() => {
						this.removeBox(box.id);
					}}
					key={box.id}
					id={box.id}
					width={box.width}
					height={box.height}
					color={box.color}
				/>
			);
		});
		return (
			<div>
				<h1>Box Maker</h1>
				<BoxForm addBox={this.addBox} />
				{boxes}
			</div>
		);
	}
}

export default BoxList;
