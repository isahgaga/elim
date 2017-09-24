import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomeHoc from './components/hoc/HomeHoc.jsx';



const Rooter=(<Router>
				<div>
				<Route path="/" exact component={HomeHoc(Home)}/>
				<Route path="/home" component={HomeHoc(Home)}/>
				<Route path="/about" component={HomeHoc(About)}/>
				<Route path="/contact" component={HomeHoc(Contact)}/>
				<Route path="/gallery" component={HomeHoc(Gallery)}/>
				</div>
			</Router>);

ReactDOM.render(Rooter, document.getElementById('root'));