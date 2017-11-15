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
		this.state={Program:'',rprogram:{},events:[]};
	}
	componentWillMount(){
		this.props.contentfulClient
		.getEntries({content_type: 'program','sys.id': this.props.match.params.id})
		.then(({items})=>{
		    this.setState({Program:items[0].fields,rprogram:items[0].fields})
		    
		})
	}
	componentDidMount(){
		this.props.contentfulClient.getEntries({
			'content_type': 'latestEvents',
			limit:3
		  })
		  .then(({items})=>{
			  this.setState({events:this.format.call(this,items)})
		  })
	}
	format(data){
		return data.map((item,index)=>{
			console.log(item)
			return {
				id:item.sys.id,
				title:item.fields.title,
				date:item.fields.eventDate
			}
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
				        	<Eventy events={this.state.events}/>
				        </div>
				    </div>
					}
					
				</div>
			</div>
			)
	}
} 

export default ProgramView;