import React, { Component } from 'react';

class Volunteer extends Component{
	constructor(props){
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.submit=this.submit.bind(this);
		this.state={name:'',email:'',age:'',phone:'',gender:'',state:'',country:'',address:'',
			qualification:'',guarantorName:'',guarantorEmail:'',guarantorPhone:'',
			err:{name:'',email:'',age:'',phone:'',gender:'',state:'',country:'',address:'',
			profession:'',guarantorName:'',guarantorEmail:'',guarantorPhone:'',general:'',all:new Set(),disabled:false}};
	}

	handleInputChange(e){
		this.setState({[e.target.name]:e.target.value});
		this.props.validator({name:e.target.id,value:e.target.value},'Form',this);
        return;
	}

	submit(){
		this.props.validatorAll([{name:'name',value:this.state.name},{name:'email',value:this.state.email},{name:'state',value:this.state.state},
			{name:"age",value:this.state.age},{name:"phone",value:this.state.phone},{name:"gender",value:this.state.gender},
			{name:"country",value:this.state.country},{name:"address",value:this.state.address},{name:"qualification",value:this.state.qualification},
			{name:"guarantorName",value:this.state.guarantorName},{name:"guarantorEmail",value:this.state.guarantorEmail},{name:"guarantorPhone",value:this.state.guarantorPhone}],
			'volunteer',this);
        if (this.state.err.all.size > 0) {
            // this.setState({sending:false,disabled:false})
            return;
        }
		this.props.startRequest.call(this);
		const {name,email,age,phone,gender,state,country,address,qualification,guarantorName,guarantorEmail,guarantorPhone}=this.state;
		const data={
				name,email,age,phone,gender,state,country,address,qualification,guarantorName,guarantorEmail,guarantorPhone
		}
        
		this.props.failedRequest.call(this,"Volunteer not created.");


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
		<div className={this.state.err.name.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
		<span className="wpcf7-form-control-wrap your-name">
		<input type="text" name="name" id="name" value={this.state.name} size="40" className="wpcf7-form-control wpcf7-text " onChange={this.handleInputChange} placeholder="Your Name"/>
		</span>
		<span className="text-danger">{this.state.err.name}</span>
		</div>
		<div className={this.state.err.email.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
		<span className="wpcf7-form-control-wrap your-email">
		<input type="email" name="email" id="email" value={this.state.email} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email  wpcf7-validates-as-email" onChange={this.handleInputChange}  placeholder="Your Email"/>
		</span>
		<span className="text-danger">{this.state.err.email}</span>
		</div>
		</div>
<div className="row">
<div className={this.state.err.address.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap nationality">
<input type="text" name="address" id="address" value={this.state.address} size="40" className="wpcf7-form-control wpcf7-text " onChange={this.handleInputChange} placeholder="address"/>
</span>
<span className="text-danger">{this.state.err.address}</span>
</div>
<div className={this.state.err.phone.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="phone" id="phone" value={this.state.phone} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel" onChange={this.handleInputChange} placeholder="Phone"/>
</span>
<span className="text-danger">{this.state.err.phone}</span>
</div>
</div>

<div className="row">
<div className={this.state.err.gender.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap gender">
<select name="gender" id="gender" className="wpcf7-form-control wpcf7-select" value={this.state.gender} onChange={this.handleInputChange}>
<option value="" disabled>select a gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>
</span>
<span className="text-danger">{this.state.err.gender}</span>
</div>
<div className={this.state.err.age.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap age">
<input type="text" name="age" id="age" value={this.state.age} className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number" onChange={this.handleInputChange} placeholder="Age"/>
</span>
<span className="text-danger">{this.state.err.age}</span>
</div>
</div>
<div className="row">
<div className={this.state.err.country.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap nationality">
<input type="text" name="country" id="country" value={this.state.country} size="40" className="wpcf7-form-control wpcf7-text " onChange={this.handleInputChange} placeholder="country"/>
</span>
<span className="text-danger">{this.state.err.country}</span>
</div>
<div className={this.state.err.state.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="state" id="state" value={this.state.state} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel" onChange={this.handleInputChange} placeholder="State"/>
</span>
<span className="text-danger">{this.state.err.state}</span>
</div>
</div>
<div className="row">
<div className={this.state.err.profession.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap profession">
<input type="text" name="profession" id="profession" value={this.state.profession} size="40" className="wpcf7-form-control wpcf7-text " onChange={this.handleInputChange} placeholder="Highest Qualification" />
</span>
<span className="text-danger">{this.state.err.profession}</span>
</div>
</div>
</fieldset>

<fieldset>
<legend>Guarantor info</legend>
		<div className="row">
		<div className={this.state.err.guarantorName.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
		<span className="wpcf7-form-control-wrap your-name">
		<input type="text" name="guarantorName" id="guarantorName" value={this.state.guarantorName} size="40" className="wpcf7-form-control wpcf7-text " onChange={this.handleInputChange} placeholder="Guarantor Name"/>
		</span>
		<span className="text-danger">{this.state.err.guarantorName}</span>
		</div>
		<div className={this.state.err.guarantorEmail.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
		<span className="wpcf7-form-control-wrap your-email">
		<input type="email" name="guarantorEmail" id="guarantorEmail" value={this.state.guarantorEmail} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email  wpcf7-validates-as-email" onChange={this.handleInputChange} placeholder="Guarantor Email"/>
		</span>
		<span className="text-danger">{this.state.err.guarantorEmail}</span>
		</div>
		</div>
<div className="row">
<div className={this.state.err.guarantorPhone.length > 0?"has-error col-xs-12 col-sm-6 form-group":"col-xs-12 col-sm-6 form-group "}>
<span className="wpcf7-form-control-wrap phone">
<input type="text" name="guarantorPhone" id="guarantorPhone" value={this.state.guarantorPhone} size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel  wpcf7-validates-as-tel" onChange={this.handleInputChange} placeholder="Guarantor Phone"/>
</span>
<span className="text-danger">{this.state.err.guarantorPhone}</span>
</div>
</div>
</fieldset>

<div>
<input type="submit" value="Send Form" className="wpcf7-form-control wpcf7-submit" disabled={this.state.disabled || this.state.err.all.size > 0} onClick={this.submit} />

</div>
</div>

</form>
</div>

			</div>
			)
	}
} 

export default Volunteer;




