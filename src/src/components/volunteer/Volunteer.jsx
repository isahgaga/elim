import React, { Component } from 'react';

class Volunteer extends Component{
	constructor(props){
		super(props);
		this.state={};
	}

	render(){
		return (

			<div className="">
				<div className="wpcf7" id="wpcf7-f588-p58-o1" >

<form  className="wpcf7-form" >

<div className="become-volunteer-form">
	<fieldset className="mb-20">
	<legend>Personal info</legend>
		<div className="row">
		<div className="col-xs-12 col-sm-6 form-group">
		<span className="wpcf7-form-control-wrap your-name">
		<input type="text" name="name" value={this.state.name} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="Your Name"/>
		</span>
		</div>
		<div className="col-xs-12 col-sm-6 form-group">
		<span className="wpcf7-form-control-wrap your-email">
		<input type="email" name="email" value={this.state.email} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email  wpcf7-validates-as-email"  placeholder="Your Email"/>
		</span>
		</div>
		</div>
<div className="row">
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap nationality">
<input type="text" name="address" value={this.state.address} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="address"/>
</span>
</div>
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="phone" value={this.state.phone} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel"  placeholder="Phone"/>
</span>
</div>
</div>

<div className="row">
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap gender">
<select name="gender" className="wpcf7-form-control wpcf7-select" value={this.state.gender}>
<option value="" disabled>select a gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>
</span>
</div>
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap age">
<input type="text" name="age" value={this.state.age} className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number"  placeholder="Age"/>
</span>
</div>
</div>
<div className="row">
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap nationality">
<input type="text" name="country" value={this.state.country} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="country"/>
</span>
</div>
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="State" value={this.state.state} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel"  placeholder="State"/>
</span>
</div>
</div>
<div className="row">
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap profession">
<input type="text" name="profession" value={this.state.profession} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="Highest Qualification" />
</span>
</div>
</div>
</fieldset>

<fieldset>
<legend>Guarantor info</legend>
		<div className="row">
		<div className="col-xs-12 col-sm-6 form-group">
		<span className="wpcf7-form-control-wrap your-name">
		<input type="text" name="guarantorName" value={this.state.guarantorName} size="40" className="wpcf7-form-control wpcf7-text "  placeholder="Guarantor Name"/>
		</span>
		</div>
		<div className="col-xs-12 col-sm-6 form-group">
		<span className="wpcf7-form-control-wrap your-email">
		<input type="email" name="guarantorEmail" value={this.state.guarantorEmail} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email  wpcf7-validates-as-email"  placeholder="Guarantor Email"/>
		</span>
		</div>
		</div>
<div className="row">
<div className="col-xs-12 col-sm-6 form-group">
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="guarantorPhone" value={this.state.guarantorPhone} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel"  placeholder="Guarantor Phone"/>
</span>
</div>
</div>
</fieldset>

<div>
<input type="submit" value="Send Form" className="wpcf7-form-control wpcf7-submit"/>

</div>
</div>

</form>
</div>

			</div>
			)
	}
} 

export default Volunteer;




