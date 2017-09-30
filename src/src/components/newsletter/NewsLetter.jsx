import React, { Component } from 'react';
import './NewsLetter.css'

class NewsLetter extends Component{
	constructor(props){
		super(props);
		this.state={email:''};
	}
	handleEmailChange(event){
		this.setState({email:event.target.value});
	}
	subscribe(){
		alert(this.state.email)
	}
	render(){
	return	<div className="news-letter-wrapper pt-75">
			
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p className="subscribe center">Join 19,000+ subscribers & get a hand picked list of the best user experience design links every week. Curated by Kenny Chen & published every Monday.</p>
							<div className="col-md-6 col-md-offset-3">
								<form>
									<div className="form-group">
										<input className="form-control input-lg" id="email" name="email" value={this.state.email} type="email" placeholder="Enter email" required="" onChange={this.handleEmailChange}/>
									</div>
									<button className="btn  btn-green btn-primary btn-lg btn-block" name="subscribe" id="subscribe" onClick={this.subscribe}>Subscribe</button>
									<span className="help-block center">No spam ever! Unsubscribe at any time.</span>
								</form>
							</div>
						</div>
					</div>
				</div>
			
		</div>

	}
}

export default NewsLetter;