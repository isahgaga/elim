import React, { Component } from 'react';
import Nav from '../nav/Nav.jsx'
import {failedRequest,startRequest,successRequest,validatorAll,validator} from '../../CommonFunc'
import Footer from '../footer/Footer.jsx'
import swal from 'sweetalert';
import {createClient} from 'contentful';

const client = createClient({
		  space: '8drv9v6vrq9y',
		  accessToken: '65aeb770e2522ad0cc1800712a2ac2d395e5c8ed112065774bd27e571efcf530'
		})


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
				<Nav {...this.props} contentfulClient={client}/>
				<div className="container-fluid">
					<Comp {...this.props} swal={swal} contentfulClient={client}  LoaderButton={LoaderButton} submitBtn={`Submit`} validator={validator} validatorAll={validatorAll} failedRequest={failedRequest} startRequest={startRequest} successRequest={successRequest}/>
				</div>
				<Footer/>
				</div>
				)
		}
	}

	return Home;


}

export default HOME;