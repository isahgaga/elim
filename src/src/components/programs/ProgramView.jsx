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
	}

	render(){
		return (
			<div className="row mb-100">
				<Banner bImage={BG} title="Programs"/>
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<p>
								<img src={PGBIG}/>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
								Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
								Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
								vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
								Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
							</p>
							<div>
								<Volunteer {...this.props}/>
							</div>
				        </div>
				        <div className="col-md-3">
				        <div className="widget-title">Latest Events</div>
				        	<Eventy/>
				        </div>
				    </div>
				</div>
			</div>
			)
	}
} 

export default ProgramView;