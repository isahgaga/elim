import React, { Component } from 'react';

class Donate extends Component{
	constructor(props){
		super(props);
		this.handleNameChange=this.handleNameChange.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.handlePhoneChange=this.handlePhoneChange.bind(this);
		this.handleAmountChange=this.handleAmountChange.bind(this);
		this.submit=this.submit.bind(this);
		this.state={name:'',email:'',phone:'',amount:'',emailErrorMsg:'',phoneErrorMsg:'',amountErrorMsg:''}
	}
	handleNameChange(e){
		const val=e.target.value;
		this.setState({[e.target.name]:val});
		return;
	}
	handleEmailChange(e){
		const val=e.target.value;
		let emailErrorMsg;
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		let test= re.test(val);
  				if (!test){
  					emailErrorMsg=`Enter a valid email address`;
  					
  				}
  				else{
  					emailErrorMsg='';
  				}
		this.setState({[e.target.name]:val,emailErrorMsg});
		return;
	}
	handlePhoneChange(e){
		const val=e.target.value;
		let phoneErrorMsg;
		let reg=/^\d+$/;
		let test= reg.test(val);
		
		if (!test && val !=='') {
			return;
		}
		if (val.toString().length < 6) {
			phoneErrorMsg=`Enter a valid phone number`;
			
		}
		else{
			phoneErrorMsg='';
		}
		this.setState({[e.target.name]:val,phoneErrorMsg});
		return;
	}
	handleAmountChange(e){
		const val=e.target.value;
		let amountErrorMsg;
		let reg=/^\d+$/;
		let test= reg.test(val);
		if (val ==='') {
			amountErrorMsg='Donation amount required';
			
		}
		else{
			amountErrorMsg=""
		}
		if (!test && val !=='') {
			return;
		}
		this.setState({[e.target.name]:val,amountErrorMsg});
		return;
	}
	submit(){

	}
	render(){
		return (

			<div className="">
				<div className="wpcf7" id="wpcf7-f588-p58-o1" >

<form  className="wpcf7-form" >

	<div className="become-volunteer-form">
		<fieldset>
				<div className="row">
				<div className="col-xs-12 col-sm-6 form-group">
				<span className="wpcf7-form-control-wrap your-name">
				<input type="text" name="name" value={this.state.name} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="Name" onChange={this.handleNameChange}/>
				
				</span>
				</div>
				<div className="col-xs-12 col-sm-6 form-group">
				<span className="wpcf7-form-control-wrap your-email">
				<input type="email" name="email" value={this.state.email} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email  wpcf7-validates-as-email"  placeholder="Email" onChange={this.handleEmailChange}/>
				<span className="text-danger">{this.state.emailErrorMsg}</span>
				</span>
				</div>
				</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 form-group">
				<span className="wpcf7-form-control-wrap phone">
				<input type="text" name="phone" value={this.state.phone}  size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel"  placeholder="Phone" onChange={this.handlePhoneChange}/>
				<span className="text-danger">{this.state.phoneErrorMsg}</span>
				</span>
				</div>
				<div className="col-xs-12 col-sm-6 form-group">
					<span className="wpcf7-form-control-wrap phone">
						<input type="text" name="amount" value={this.state.amount} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel"  placeholder="Amount" onChange={this.handleAmountChange}/>
						<span className="text-danger">{this.state.amountErrorMsg}</span>
					</span>
				</div>
			</div>
		</fieldset>

	<div>
	<input type="submit" value="Donate" className="wpcf7-form-control wpcf7-submit"  onClick={this.submit} />
	
	</div>
	</div>
</form>
</div>
</div>
			)
	}
} 

export default Donate;




