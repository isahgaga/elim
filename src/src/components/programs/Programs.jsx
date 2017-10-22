import React, { Component } from 'react';
import './Programs.css'
import Program from '../program/Program.jsx'
import GIRLS from '../../media/girls.jpg'
import {Link} from 'react-router-dom';

const fakeProgram ={
	title:"Educate the girls",
	img:GIRLS,
	description:`educate girls so they  learn and are empowered to lead.`
};

class Programs extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="white">
				<div className="container">
				
					<div className="row programs">
						
							<div className="col-md-12">
								<div className="title-div center mb-80">
									<div className="title"><span>Our Programs</span></div>
									<span className="text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
								</div>
							</div>
							<div className="col-md-12">
								<div className="row">
									<div className="col-md-12">
										<div className="col-md-4">
											<Program program={fakeProgram} />
										</div>
										<div className="col-md-4">
											<Program program={fakeProgram} />
										</div>
										<div className="col-md-4">
											<Program program={fakeProgram} />
										</div>
										
										
									</div>
									<div className="col-md-12">
										<p className="center mt-70 mb-75">
											<Link to="/programs" title="Read More" className="p-btn"><span>All Programs</span></Link>
										</p>
									</div>
								</div>	
							</div>
						
					</div>
				

				
			</div>
			</div>
			
			
			)
	}
} 

export default Programs;