import React, { Component } from 'react';
import Swiper from 'swiper';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'swiper/dist/css/swiper.css'
import './Header.css'


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
						<div className="image image-large" style={{backgroundImage:`url(http://demo.gloriathemes.com/wp/charitywp/wp-content/uploads/2017/06/slider1-1920x740.jpg)`}}>
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
			       <div className="image image-large" style={{backgroundImage:`url(http://demo.gloriathemes.com/wp/charitywp/wp-content/uploads/2017/06/slider1-1920x740.jpg)`}}>
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



