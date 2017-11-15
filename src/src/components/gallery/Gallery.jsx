import React, { Component } from 'react';
import PIC1 from '../../media/1.jpg'
import PIC2 from '../../media/2.jpg'
import TB from '../../media/11.jpg'
import lightbox from 'lightbox2'
import 'lightbox2/dist/css/lightbox.min.css'
import Banner from '../banner/Banner.jsx'
import BG from '../../media/sliderImage1.jpg'

class Gallery extends Component{

	constructor(props){
			super(props);
			this.state={images:[]}
	}
	componentDidMount(){
		this.setState({images:[PIC1,PIC2]});
		lightbox.option({
      'wrapAround': true,
      fitImagesInViewport:true
    })
	}

	render(){
		return (
			<div className="row mb-75">
			<Banner bImage={BG} title="Gallery"/>
			<div className="container">
				<div className="row">
					{
				  	this.state.images.map((img,index)=>{
				  		return (
				  			<div className="col-md-3">
				  					<a href={img} key={++index} data-lightbox="roadtrip">
				  			<img src={TB}/>
				  			</a>
				  			</div>
				  			
				  			
				  			)
				  	})
				  }
				</div>

			</div>
			<div id="selector1"></div>

			</div>
			)
	}
}

export default Gallery;