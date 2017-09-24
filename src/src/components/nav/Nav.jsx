import React, { Component } from 'react';
import './Nav.css'
import Hamburger from '../../media/hamburger_icon.png'
import Logo from '../../media/logo.png'
import {Link} from 'react-router-dom';


class Nav extends Component{

	constructor(props){
			super(props);
	}
	componentDidMount(){
		window.$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		window.$(this).toggleClass('opned');
		window.$('header nav').toggleClass('active');
		
	});
	}

	render(){
		return (
			<header>
			<div className="wrapper">
				<a href="#"><img src={Logo} className="logo" alt="" title=""/></a>
				<a href="#" className="hamburger" >
					<i className="fa fa-bars"></i>
				</a>
				<nav>
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="#">Programs</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
					<a href="#" className="login_btn">Download catalog</a>
				</nav>
			</div>
		</header>
			)
	}
}

export default Nav;