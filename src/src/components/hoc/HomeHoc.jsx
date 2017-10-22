import React, { Component } from 'react';
import Nav from '../nav/Nav.jsx'
import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'
import Footer from '../footer/Footer.jsx'
import swal from 'sweetalert';


const HOME = (Comp)=>{

	console.log('here');
	class Home extends Component{
		constructor(props){
			super(props);
		}

		render(){
			const LoaderButton=<span><i className="fa fa-circle-o-notch fa-spin"></i> Loading</span>;
			return (
				<div >
				<Nav/>
				<div className="container-fluid">
					<Comp {...this.props} swal={swal}  LoaderButton={LoaderButton} submitBtn={`Submit`} validator={validator} validatorAll={validatorAll} failedRequest={failedRequest} startRequest={startRequest} successRequest={successRequest}/>
				</div>
				<Footer/>
				</div>
				)
		}
	}

	return Home;


}

export default HOME;