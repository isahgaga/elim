import React, { Component } from 'react';
import HAND from '../../media/hand.jpg'
import Blog from '../homeblog/HomeBlog.jsx'
import moment from 'moment'

export const Event=({event})=>{
	return (
		<div className="event-wrapper">
		<div>
			<div className="image-article">
			<img src={HAND} />
			</div>
			<div className="content">
			<div className="title2">{event.title}</div>
			<div className="excerpt">{event.description}</div>
			<div className="eventdate"><i className="fa fa-calendar" aria-hidden="true"></i><span>{moment(event.date).format("MMM, D YYYY")}</span></div></div>
		</div>

			
		</div>
		)
}
export const Eventy=({events})=>{
	return (
		<div className="event-wrapper row">
		{
			events.map((event,index)=><div key={++index} className="col-md-12 mb-15">
			<div className="row">
				<div className="col-md-6">
					<div className="image-article">
						<img src={HAND} />
					</div>
				</div>
				<div className="col-md-6">
				<div className="content">
			<div className="title2 color-def" style={{fontSize:'11px'}}>{event.title}</div>
			
			<div className="eventdate color-def"><i className="fa fa-calendar" aria-hidden="true" style={{fontSize:'10px'}}></i><span style={{fontSize:'9px'}}>{moment(event.date).format("MMM, D YYYY")}</span></div></div>
				</div>
			</div>
			
			
		</div>)
		}	
		</div>
		)
}

class HomeEvents extends Component{
	constructor(props){
		super(props);
		this.state={events:[]}
	}
	componentWillMount(){
		this.props.contentfulClient.getEntries({
			'content_type': 'latestEvents'
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
			<div className="mt-75">
				<div className="container">
					<div className="col-md-12">

						<div className="row">
							<div className="col-md-12">
								<div className="row">
									<div className="col-md-12">
									<div className="">
										<div className="title text-orange title-orange center">Events</div>
										<div className="text text-white mb-80 center">lorem ipsum la att those to tamp</div>
									</div>
									
									</div>
									{
										this.state.events.map((item,index)=><div className="col-md-6" key={++index}>
										<Event event={item}/>
									</div>)
									}
									
									
								</div>
							</div>
							
						</div>
					

					</div>
				</div>
			</div>
			
			
			)
	}
} 

export default HomeEvents;