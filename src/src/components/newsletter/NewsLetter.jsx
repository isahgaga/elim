import React, { Component } from 'react';
import './NewsLetter.css';
import Axios from 'axios';

class NewsLetter extends Component{
	constructor(props){
		super(props);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.subscribe=this.subscribe.bind(this);
		this.validate=this.validate.bind(this);
		this.state={email:'',disabled:false,emailErr:false,errMsg:'',btnText:'Subscribe',Successful:false};
	}
	handleEmailChange(event){
		this.setState({email:event.target.value});
		this.validate(event.target.value);
	}
	subscribe(event){
		event.persist();
		event.preventDefault();
		event.target.blur();
		const isValid=this.validate(this.state.email);
		if (!isValid) {
			return;
		}
		const url='http://localhost/elim/site/public/api/subscribe';
		this.setState({btnText:'...Subscribing'});
		Axios.post(url,{email:this.state.email})
		.then(res=>{
			this.setState({btnText:'Successful',Successful:true});
			setTimeout(()=>{
				this.setState({btnText:'Subscribe',Successful:false});
			},2000);
			
		})
		.catch(err=>{

		});
		
	}
	validate(value){
		if (value === '') {
			this.setState({emailErr:true,errMsg:'Please provide an email',disabled:true});
			return false;
		}
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		let test= re.test(value);
  		if (!test){
  				this.setState({emailErr:true,errMsg:'Please provide a valid email',disabled:true});
				return false;
  		}
  		this.setState({emailErr:false,errMsg:'',disabled:false});
  		return true;

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
										{
											this.state.emailErr && <span className="text-danger">{this.state.errMsg}</span>
										}
									</div>
									<button className="btn  btn-green btn-primary btn-lg btn-block" name="subscribe" id="subscribe" disabled={this.state.disabled} onClick={this.subscribe} style={{backgroundColor:this.state.Successful?'#fa6900':'#ce3236',borderColor:this.state.Successful?'#fa6900':'#ce3236'}}>{this.state.btnText}</button>
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