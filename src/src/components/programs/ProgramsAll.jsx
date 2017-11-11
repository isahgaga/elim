import React, { Component } from 'react';
import Banner from '../banner/Banner.jsx';
import BG from '../../media/sliderImage1.jpg';
import Program from '../program/Program.jsx';
import GIRLS from '../../media/girls1.jpg'

const fakeProgram ={
	title:"Educate the girls",
	img:GIRLS,
	description:`educate girls so they  learn and are empowered to lead.`
};

class ProgramsAll extends Component{

	constructor(props){
			super(props);
			this.state={};
	}
	componentDidMount(){
		
	}

	render(){
		return (
			<div className="row mb-100">
			<Banner bImage={BG} title="Programs"/>
			<div className="container">
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

				</div>

			</div>
		

			</div>
			)
	}
}

export default ProgramsAll;