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
			this.state={Programs:[]};
	}
	componentWillMount(){
		this.props.contentfulClient.getEntries({
		  'content_type': 'program'
		})
		.then(({items})=>{
		    //console.log(entries.includes.Entry)
		    this.setState({Programs:this.format.call(this,items)})
		    
		})
	}
	componentDidMount(){
		
	}
	format(data){
		return data.map((item,index)=>{
			return {
				id:item.sys.id,
				title:item.fields.name,
				description:item.fields.description,
				img:item.fields.pic.fields,
				isDonate:item.fields.isDonate
			}
		})
	}

	render(){
		return (
			<div className="row mb-100">
			<Banner bImage={BG} title="Programs"/>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{
							this.state.Programs.map((item,index)=><div className="col-md-4" key={++index}>
							<Program program={item} />
						</div> )
						}
										
					</div>

				</div>

			</div>
		

			</div>
			)
	}
}

export default ProgramsAll;