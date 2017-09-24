import React, { Component } from 'react';
import './Banner.css'


const Banner=(props)=>{
	return(
		<div className="page-title-breadcrumbs">
		<div className="page-title-breadcrumbs-image" style={{backgroundImage:`url(${props.bImage})`}}></div>
		<div className="container"><h1>{props.title}</h1>
		
		</div>
		</div>
		)
}

export default Banner;