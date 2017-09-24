import React, { Component } from 'react';
import BLOG from '../../media/blog.jpg'
import './HomeBlog.css'

const Blog=(props)=>{
	return (
		<div className="blog-wrapper">
		<div>
			<div className="image mb-15">
			<a href="" title="">
			<img src={BLOG} alt="" />
			</a>
			
			</div>
				<div className="title2">
				<a href="" title="">Donate to the Our Mission for Love</a>
				</div>
				<div className="excerpt">Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, 
				his utinam principes dignissim ad. Ne nec dolore oblique nusquam, 
				cu luptatum volutpat delicatissimi has. Sed ad dicam platonem,
				 mea eros illum elitr id, ei has similique constituto.
				 </div>
				<div className="bottom">
				<ul className="post-information">
				<li className="date">
				<i className="fa fa-calendar" aria-hidden="true"></i>June 2, 2017</li>
				<li className="comment"><i className="fa fa-comment" aria-hidden="true"></i>
				<a href="" title="">0 Comment</a></li></ul>
				</div>
		</div>

			
		</div>
		)
}

export default Blog;


	