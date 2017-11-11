import React, { Component } from 'react';
import Banner from '../banner/Banner.jsx'
import BG from '../../media/sliderImage1.jpg'
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
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.state={email:'',subject:'',name:'',message:'',submitButtonText:'Send',isSuccessful:false,failed:false,emailError:false,submitBtn:this.props.submitBtn,
		err:{email:'',subject:'',name:'',message:'',general:'',all:new Set()},disabled:false};


	}
	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
		this.props.validator({name:e.target.id,value:e.target.value},'Contact',this);
        return;
	}

	submit(e){
		e.preventDefault();
		this.props.validatorAll([{name:'name',value:this.state.name},{name:'email',value:this.state.email},
							{name:'message',value:this.state.message},{name:'subject',value:this.state.subject}],'contact',this);
		if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		
		this.setState({submitButtonText: '...Sending'});
		if(this.state.email === ''){
			this.setState({emailError:true})
			return
		}
		
		//alert('nero')
		const url = 'http://localhost/elim/site/public/api/contact';
		const {name,email,subject,message} = this.state
		const data = {
			name,
			email,
			subject,
			message
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

  			backgroundColor: (this.state.isSuccessful) ?'green':'#fa6900'

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
												<div className={this.state.err.name.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
												<span className="your-name">
													<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} size="40" className="" aria-required="true" aria-invalid="false" placeholder="Your Name"/>
												</span>
												<span className="text-danger">{this.state.err.name}</span>
												</div>
												<div className={this.state.err.email.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
												<span className="your-email">
													<input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} size="40" className="" aria-required="true" aria-invalid="false" placeholder="Your Email"/>
												</span>
												<span className="text-danger">{this.state.err.email}</span>	
												</div>
											</div>
											<div className={this.state.err.subject.length > 0?"has-error form-group":" form-group "}>
												<span className="wpcf7-form-control-wrap your-subject">
													<input type="text" name="subject" id="subject" value={this.state.subject} onChange={this.handleInputChange} size="40" className="" aria-invalid="false" placeholder="Subject"/>
														
												</span>
												<span className="text-danger">{this.state.err.subject}</span>
											</div>
											<div className={this.state.err.message.length > 0?"has-error  form-group":" form-group "}>
												<span className="">
													<textarea name="message" id="message" value={this.state.message} onChange={this.handleInputChange} cols="40" rows="8" className="" aria-invalid="false" placeholder="Your Message"></textarea>

												</span>
												<span className="text-danger">{this.state.err.message}</span>	
											</div>
											<p>
												<input type="submit" value={this.state.submitButtonText} onClick={this.submit} disabled={this.state.disabled || this.state.err.all.size > 0} className="" style={styles} />
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