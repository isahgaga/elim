export const successRequest=function(message){
	this.setState({submitBtn:"Success"});
	this.props.swal({   
            title: "Success!",   
            text: message,
           icon: "success",  
            timer: 2000,   
            buttons: false 
        });
	setTimeout(()=>{
		this.setState({submitBtn:this.props.submitBtn,disabled:false});
	},2000)
		
}

export const failedRequest=function(message){
		this.setState({submitBtn:this.props.submitBtn,disabled:false});
		this.props.swal({   
            title: "Sorry!",   
            text: message,
           icon: "error",  
            timer: 2500,   
            buttons: false 
        });
}

export const startRequest=function(){
		this.setState({submitBtn:this.props.LoaderButton,disabled:true});
}

export const validatorAll=(fields,controller,obj)=>{
	console.log(fields)
	const fieldType=typeof fields;
	const res={};
	if(typeof fields !== "object"){
		throw(`wrong type passed to validator as first parameter. Expected Array but got ${fieldType}`);
		return;
	}

	fields.forEach(field=>{
		const {name,value}=field;
		const errors=[];
		const rules=getFieldRUles(name) || [];
		if (rules.length < 1) {
			return;
		}
		if (rules.indexOf('required') !== -1) {
			let error =validate('required',value);
			if (error !== null) {
				let errorMsg=getErrorMsg('required',name,controller);
			res[name]=errorMsg;
			obj.setState({err:{...obj.state.err,...res,all:obj.state.err.all.add(name)}});
			return res;
			}
			
		}
		rules.forEach(rule=>{
			const error=validate(rule,value,field);
			if (error !== null) {
				let errorMsg=getErrorMsg(error,name,controller);
				errors.push(errorMsg);
				return;
			}
			return;

		});
		if (errors.length > 0) {
			res[name]=errors;
			obj.setState({err:{...obj.state.err,...res,all:obj.state.err.all.add(name)}});
		}
		
		
		obj.setState({err:{...obj.state.err,...res}});
		return;
	
	});
	
	return;
}
export const validator=(field,controller,obj)=>{
	
	const res={};
		const {name,value}=field;
		const errors=[];
		const rules=getFieldRUles(name) || [];
		if (rules.length < 1) {
			return;
		}
		if (rules.indexOf('required') !== -1) {
			let error =validate('required',value);
			if (error !== null) {
				let errorMsg=getErrorMsg('required',name,controller);
			res[name]=errorMsg;
			obj.setState({err:{...obj.state.err,...res,all:obj.state.err.all.add(name)}});
			return res;
			}
			
			
		}

		rules.forEach(rule=>{
			const error=validate(rule,value,field);
			if (error !== null) {
				let errorMsg=getErrorMsg(error,name,controller);
				res[name]=errorMsg;
				errors.push(errorMsg);
			}
			return;

		});
		if (errors.length > 0) {
			res[name]=errors[0];
		}
		else{
			 res[name]='';
			 obj.state.err.all.delete(name);
			 obj.setState({err:{...obj.state.err,...res}});
			 return;
		}
	obj.setState({err:{...obj.state.err,...res,all:obj.state.err.all.add(name)}});
	return;
}

export const getFieldRUles=field=>{
	const rules=validationRules[field] || [];
	return rules.length >0 ?rules:[];
}

export const validate=(rule,value,fields=null)=>{
	//console.log(fields)
	let error=null;
	if (rule ==="required") {
		if (value ==='' || value===' ') {
			return rule;
		}
		return error;
	}

	if (rule.substr(0,3) ==='max') {
		const len=rule.substr(4);
		return value.length > len ?  rule:error;
	}
	if (rule.substr(0,3) ==='min') {
		const len=rule.substr(4);
		return value.length < len ?  rule:error;
	}

	if (rule ==='string') {

		return /^[-/+]?[+0-9]+$/.test(value) === true?rule:error;
	}
	if (rule === 'email') {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		let test= re.test(value);
  				if (!test){
  					return rule;
  				}
  				return error;
	}
	if (rule === 'phoneNumber') {
		var phoneno = /^\d{11}$/;
		if (!value.match(phoneno)){
			return rule;
		}
		return error;
	}
	if (rule === 'match') {
		if (value !==fields.password){
			return rule;
		}
		return error;
	}
	if (rule === 'number') {
		let reg=/^\d+$/;
		let testr= reg.test(value);
		if (!testr){
  					return rule;
  		}
  		return error;
	}

	return error;

}

export const validationRules={
	name:['required','max:50','string'],
	state:['required'],
	location:['required'],
	contactName:['required','max:50','string'],
	mname:['required','max:50','string'],
	code:['required','max:3','string'],
	comment:['required'],
	description:['required','string'],
	firstName:['required','max:50','string'],
	lastName:['required','max:50','string'],
	email:['required','email'],
	phone:['required','phoneNumber'],
	filetype:['required'],
	cpassword:['required','min:8'],
	password:['required','min:8'],
	confirmPassword:['required','match'],
	permissionName:['required'],
	userScope:['required'],
	username:['string'],
	manufacturer:['required','max:50','string'],
	model:['required'],
	modelYear:['required','number','max:4'],
	color:['required','string'],
	bodyType:['string'],
	registered:['required'],
	regNo:['number','max:50'],
	vin:['number','required'],
	dealershipName:['required','string'],
	to:['required','string'],
	from:['string'],
	subject:['string'],
	body:['string'],
	cost:['required','number'],
	amount:['required','number'],
	balance:['required','number'],
	address:['required','string'],
	gender:['required'],
	age:['required','number','max:2'],
	country:['required','string'],
	profession:['string'],
	guarantorName:['required','max:50','string'],
	guarantorEmail:['required','email'],
	guarantorPhone:['required','phoneNumber'],


}

export const getErrorMsg=(error,name,controller=null)=>{
	let a='a';
	if (typeof controller === 'string' && ['a','e','i','o','u'].indexOf(controller[0].toLowerCase()) !== -1) {
		 a='an'; 
	}
	
	if (name ==='contactName') {
		name='contact name'
	}

	if (error === 'required') {
		return `Please provide ${a} ${controller} ${name}`;
	}
	if (error === 'number') {
		return `Please provide a valid number`;
	}

	if (error.substr(0,3) ==='max') {
		const len=error.substr(4);
		return `The maximum length for the ${controller} ${name} is ${len}`;
	}

	if (error.substr(0,3) ==='min') {
		const len=error.substr(4);
		return `The minimum length for the ${controller} ${name} is ${len}`;
	}

	if (error === 'string') {
		return `Enter a correct ${controller} ${name}`;
	}

	if (error === 'email') {
		return `Please provide a valid email address`;

	}
	if (error === 'phoneNumber') {
		return `Please provide a valid phonenumber`;
	}
	if (error === 'match') {
		return `confirm password does not match password`;
	}
}