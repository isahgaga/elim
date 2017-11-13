import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Program.css'

class Program extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const img=this.props.program.img;
		return (

			<div className="program">
				
				<img src={typeof img ==='object'?'https:'+img.file.url+ '?fit=fill&w=350&h=200':img} className="mb-20" />
				<div className="content">
					<div className="heading-1 mb-10">
						<Link to={`/program/${this.props.program.id}`} title="">
						{this.props.program.title}
						</Link>
					</div>
					<div className="excerpt color-def height-130">
						{this.props.program.description.length > 300?this.props.program.description.substr(0,300)+'...' : this.props.program.description}
					</div>
					<div className="button">
						<Link to={`/program/${this.props.program.id}`} title="" className="filled-btn site-btn mr-30">{this.props.program.isDonate?'Donate now':'Volunteer'}</Link>
						<Link to={`/program/${this.props.program.id}`} title="" className="outline-btn site-btn">Details</Link>
					</div>
				</div>

			</div>
			)
	}
} 

export default Program;