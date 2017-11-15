import React, { Component } from 'react';
import Story from '../story/Story.jsx';
import Programs from '../programs/Programs.jsx';
import HomeEvents from '../homeevents/HomeEvents.jsx';
import Header from '../header/Header.jsx';
import NewsLetter from '../newsletter/NewsLetter.jsx';
import './Home.css'
import BG from '../../media/edit4.jpg'


const Separator=(props)=>{
	return(
		<div className="col-md-12 white">
		<hr className="separator"/>
		</div>
		)
}

class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		//const MATCH=this.props.match;
		return (
				<div className="row home-row" style={{backgroundImage:`url(${BG})`}}>
					<Header/>
					<Story/>
					<Separator/>
					<Programs {...this.props}/>
					<HomeEvents {...this.props}/>
					<NewsLetter/>
				</div>
				
			)
	}
}

export default Home;