import React, { Component } from 'react';
import HAND from '../../media/hand.jpg'
import Blog from '../homeblog/HomeBlog.jsx'


const Event=(props)=>{
	return (
		<div className="event-wrapper">
		<div>
			<div className="image-article">
			<img src={HAND} />
			</div>
			<div className="content">
			<div className="title2">Friendship and Peace</div>
			<div className="excerpt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod tincidunt ut laoreet dolore magna.</div>
			<div className="eventdate"><i className="fa fa-calendar" aria-hidden="true"></i><span>May 2, 2018</span></div></div>
		</div>

			
		</div>
		)
}

class HomeEvents extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="mt-75">
				<div className="container">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-6">
								<div className="row">
									<div className="col-md-12">
									<div className="">
										<div className="title text-orange title-orange">Events</div>
										<div className="text text-white mb-80">lorem ipsum la att those to tamp</div>
									</div>
									
									</div>
									<div className="col-md-12">
										<Event/>
									</div>
									<div className="col-md-12">
									<Event/>
									</div>
									<div className="col-md-12">
									<Event/>
									</div>
									<div className="col-md-12">
									<Event/>
									</div>
									<div className="col-md-12">
										<Event/>
									</div>
								</div>
							</div>
							<div className="col-md-6">
							<div className="row">
								<div className="col-md-12">
									<div className="">
										<div className="title text-orange title-orange">Blog</div>
										<div className="text text-white mb-80">lorem ipsum la att those to tamp</div>
									</div>
									
									</div>
								<div className="col-md-6">
									<Blog/>
								</div>
								<div className="col-md-6">
									<Blog/>
								</div>
								<div className="col-md-6">
									<Blog/>
								</div>
								<div className="col-md-6">
									<Blog/>
								</div>
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