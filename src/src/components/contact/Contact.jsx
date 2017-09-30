import React, { Component } from 'react';
import Banner from '../banner/Banner.jsx'
import BG from '../../media/banner.jpg'
import './Contact.css'
import Axios from 'axios';
const Separator=(props)=>{
	return(
		<div className="col-md-12 white">
		<hr className="separator"/>
		</div>
		)
}

class Contact extends Component{
	constructor(props){
		super(props);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.handleSubjectChange=this.handleSubjectChange.bind(this);
		this.handleNameChange=this.handleNameChange.bind(this);
		this.handleMessageChange=this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state={email:'',subject:'',name:'',message:'',submitButtonText:'Send',isSuccessful:false,failed:false};


	}
	handleEmailChange(e){
		this.setState({email:e.target.value});
			
	}
	handleSubjectChange(e){
		this.setState({subject:e.target.value});
	}
	handleNameChange(e){
		this.setState({name:e.target.value});
	}
	handleMessageChange(e){
		this.setState({message:e.target.value});
	}
	handleSubmit(e){
		//let that = this;
		this.setState({submitButtonText: '...Sending'});
		e.preventDefault();
		//alert('nero')
		const url = 'http://localhost:8000/api/contact';
		const data = {
			name: this.state.name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message
		}
		Axios.put(url,data).then((function(res){
			this.setState({submitButtonText: 'Sent',isSuccessful:true});			
			setTimeout(() =>{this.setState({submitButtonText: 'Send',isSuccessful:false})},5000);
			alert(res.data);
		}).bind(this)).catch((err)=>{
			this.setState({submitButtonText: 'Send',isSuccessful:false});
			
			alert(err);
		})
		console.log('done my stuff');
		
		

	}



	render(){
  const styles={
  			backgroundColor: (this.state.isSuccessful) ?'green':'fa6900'
  };
		return (
				<div className="row about-row">
					<Banner bImage={BG} title="Contact"/>
					<div className="container">
					<div className="row">
							<div className="col-md-6">
								<div className="contact-title mb-20"><span>Contact Form</span></div>
								<div role="form">

									<form>

										<div >
											<div className="row">
												<div className="col-xs-12 col-sm-6 form-group"><span className="your-name">
													<input type="text" name="your-name" value={this.state.name} onChange={this.handleNameChange} size="40" className="" aria-required="true" aria-invalid="false" placeholder="Your Name"/></span>
												</div>
												<div className="col-xs-12 col-sm-6 form-group"><span className="your-email">
													<input type="email" name="your-email" value={this.state.email} onChange={this.handleEmailChange} size="40" className="" aria-required="true" aria-invalid="false" placeholder="Your Email"/></span>
												</div>
											</div>
											<div className="form-group">
												<span className="wpcf7-form-control-wrap your-subject">
													<input type="text" name="your-subject" value={this.state.subject} onChange={this.handleSubjectChange} size="40" className="" aria-invalid="false" placeholder="Subject"/>
												</span>
											</div>
											<div className="form-group">
												<span className="">
													<textarea name="your-message" value={this.state.message} onChange={this.handleMessageChange} cols="40" rows="8" className="" aria-invalid="false" placeholder="Your Message"></textarea>
												</span>
											</div>
											<p>
												<input type="submit" value={this.state.submitButtonText} onClick={this.handleSubmit} className="" style={styles}/>
												<span className="ajax-loader"></span>
											</p>
										</div>
										<div className=""></div>
									</form>
								</div>

							</div>
							<div className="col-md-6">
								<div className="contact-title mb-20"><span>Contact Information</span></div>
								<div className="charitywp-contact-box">
								<div className="contact-row address">
								<i className="fa fa-map-marker" aria-hidden="true"></i>Walking Street, Los Angeles, California, USA
								</div>
								<div className="contact-row email">
								<i className="fa fa-envelope" aria-hidden="true"></i>
								charity@gloriathemes.com
								</div>
								<div className="contact-row phone">
								<i className="fa fa-phone" aria-hidden="true"></i>
								01 987 659 87 66
								</div>
								<div className="contact-row fax">
								<i className="fa fa-fax" aria-hidden="true"></i>+01 987 659 87 60
								</div>
								</div>

							</div>
					</div>

					</div>
					
				</div>
				
			)
	}
}

export default Contact;