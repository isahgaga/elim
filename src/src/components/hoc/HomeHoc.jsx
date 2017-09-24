import React, { Component } from 'react';
import Nav from '../nav/Nav.jsx'
import Footer from '../footer/Footer.jsx'


const HOME = (Comp)=>{

	console.log('here');
	class Home extends Component{
		constructor(props){
			super(props);
		}

		render(){
			return (
				<div >
				<Nav/>
				<div className="container-fluid">
					<Comp/>
				</div>
				<Footer/>
				</div>
				)
		}
	}

	return Home;


}

export default HOME;