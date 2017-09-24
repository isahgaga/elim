import React, { Component } from 'react';
import './Program.css'

class Program extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (

			<div className="program">
				<img src={this.props.program.img} className="mb-20" />
				<div className="content">
					<div className="heading-1 mb-10">
						<a href="#" title="">
						{this.props.program.title}
						</a>
					</div>
					<div className="excerpt mb-20">
						{this.props.program.description}
					</div>
					<div className="button">
						<a href="#" title="" className="filled-btn site-btn mr-30">Donate now</a>
						<a href="#" title="" className="outline-btn site-btn">Details</a>
					</div>
				</div>

			</div>
			)
	}
} 

export default Program;