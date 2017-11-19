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
	componentWillMount(){
		this.props.contentfulClient.getEntries({
			'content_type': 'gallery'
		})
		.then(({items})=>{
		    this.setState({images:this.format.call(this,items)})
		    
		})
	}
	format(data){
		return data.map((item,index)=>{
			return {
				id:item.sys.id,
				title:item.fields.title,
				img:item.fields.pic.fields
			}
		})
	}
	componentDidMount(){
		
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
				  					<a href={typeof img.img ==='object'?'https:'+img.img.file.url+ '?fit=fill&w=960&h=440':''} key={++index} data-lightbox="roadtrip">
				  			<img src={typeof img.img ==='object'?'https:'+img.img.file.url+ '?fit=thumb&w=262&h=148':''}/>
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