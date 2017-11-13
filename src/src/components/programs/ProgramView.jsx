import React, { Component } from 'react';
import PGBIG from '../../media/pgbig.jpg'
import Banner from '../banner/Banner.jsx';
import BG from '../../media/sliderImage1.jpg';
import {Eventy} from '../homeevents/HomeEvents.jsx';
import Volunteer from '../volunteer/Volunteer.jsx'
import Donate from '../donate/Donate.jsx'
class ProgramView extends Component{
	constructor(props){
		super(props);
		this.state={Program:'',rprogram:{}};
	}
	componentWillMount(){
		this.props.contentfulClient
		.getEntries({content_type: 'program','sys.id': this.props.match.params.id})
		.then(({items})=>{
		    this.setState({Program:items[0].fields,rprogram:items[0].fields})
		    
		})
	}
	render(){
		return (
			<div className="row mb-100">
				<Banner bImage={BG} title={this.state.rprogram.name} />
				<div className="container">
					{
						this.state.Program !=='' && 
						<div className="row">

						<div className="col-md-9">
							<p>
								<img src={typeof this.state.Program.pic.fields === 'object'?'https:'+this.state.Program.pic.fields.file.url+'?fit=fill&w=870&h=450':''}/>
							</p>
							<p>
								{this.state.Program.description}
							</p>
							<div>
								{
									!this.state.Program.isDonate && <Volunteer {...this.props}/>
								}
								
								
								{
									this.state.Program.isDonate && <Donate {...this.props}/>
								}
							</div>
				        </div>
				        <div className="col-md-3">
				        <div className="widget-title">Latest Events</div>
				        	<Eventy/>
				        </div>
				    </div>
					}
					
				</div>
			</div>
			)
	}
} 

export default ProgramView;