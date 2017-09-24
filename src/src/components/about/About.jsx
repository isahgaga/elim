import React, { Component } from 'react';
import Banner from '../banner/Banner.jsx'
import BG from '../../media/banner.jpg'
import OURSTORYIMG from '../../media/our-story.jpg'

const Separator=(props)=>{
	return(
		<div className="col-md-12 white">
		<hr className="separator"/>
		</div>
		)
}

class About extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<div className="row about-rowe">
					<div className="col-md-12 pall-0">
						<Banner bImage={BG} title="About"/>
					</div>
					<div className="container">
						<div className="col-md-7">
						<div className="mb-20">
							<p>
							Elims Women Development Initiative is a Non-profit organization born with the aim of empowering
							women to be valuable contributors to their communities while reinforcing their roles as the
							upholders of moral and social values dear to society. The organization is a fully registered Not-forprofit
							with its operating headquarters located in Alagutan, Lagos state. 

							</p>
							 <p><strong>laritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</strong></p>
							 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
							 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.
							  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.
							   Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.
							    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.
							 </p>
						</div>
											
											
					</div>
					<div className="col-md-5">
						<div>
							<img src={OURSTORYIMG} />
						</div>
					</div>
					<div className="col-md-12">
						<p className="mt-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
							 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.</p>
							 <p className="mt-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
							 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
							 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dignissim qui blandit praesent luptatum.</p>
					</div>
					</div>
					
					
				</div>
				
			)
	}
}

export default About;