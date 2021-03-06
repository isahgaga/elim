import React, { Component } from 'react';
import Swiper from 'swiper';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'swiper/dist/css/swiper.css'
import './Header.css'
import SliderImage1 from '../../media/sliderImage1.jpg' 
import SliderImage2 from '../../media/sliderImage2.jpg' 


class Header extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };
		return (
			<div className="">
				<ReactSlick {...settings}>
					<div>
						<div className="image image-large" style={{backgroundImage:'url(' + SliderImage1 + ')'}}>
				<div className="content container">
				<div className="content-wrapper">
				<div className="header-title">Education for Africa</div>
				<p className="header-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
				<div className="buttons">
				<a href="" target="_parent" title="Donate Now"><span>Donate Now</span></a>
				</div>
				</div>
				</div>
				</div>
					</div>
			        <div>
			       <div className="image image-large" style={{backgroundImage:'url(' + SliderImage2 + ')'}}>
				<div className="content container">
				<div className="content-wrapper">
				<div className="header-title">Education for Nigeria</div>
				<p className="header-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
				<div className="buttons">
				<a href="" target="_parent" title="Donate Now"><span>Donate Now</span></a>
				</div>
				</div>
				</div>
				</div>
			        </div>
			        
				</ReactSlick>
			</div>
			)
	}

}

export default Header;



