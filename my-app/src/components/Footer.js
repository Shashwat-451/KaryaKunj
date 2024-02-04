import React from "react";
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import wiz from './imagesvid/wiz.png'

import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {

	return (
		
		<body>

			<footer class="footer"  >
				<div class="container" style={{paddingTop:"30px",paddingBottom:"10px"}} >
					<div  style={{display:"flex",width:"100%"}} class="row text-center">
						<div style={{width:"20%"}} class="footer-col">
							<h4>company</h4>
							<ul>
								<li><a href="#">about us</a></li>
								<li><a href="#">our services</a></li>
								<li><a href="#">privacy policy</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">affiliate program</a></li>
							</ul>
						</div>
						<div style={{width:"25%"}} class="footer-col">
							<h4>LOCATION</h4>
							<ul>
								<li><a href="/mumbai">Mumbai</a></li>
								<li><a href="/delhi">Delhi</a></li>
								<li><a href="/chennai">Chennai</a></li>
								<li><a href="/kolkata">Kolkata</a></li>
								<li><a href="/Goa">Goa</a></li>
							</ul>
						</div>
						<div style={{width:"25%"}}  class="footer-col">
							<h4>Useful Links</h4>
							<ul>
								<li><a href="/rooms">Rooms</a></li>
								<li><a href="/blogs">Blogs</a></li>
								<li><a href="/contact">Contact</a></li>
								<li><a href="/explore">Explore</a></li>
								<li><a href="#">Other Services</a></li>
							</ul>
						</div>
						<div style={{width:"25%"}} class="footer-col">
							<h4>follow us</h4>
							<div class="social-links text-center">
								{/* <FontAwesomeIcon icon={faYoutube} className="ico " color="red"/>
				   <FontAwesomeIcon icon={faTwitter} className="ico" color="blue"/>
				   <FontAwesomeIcon icon={faInstagram} className="ico" color="red"/>
				   <FontAwesomeIcon icon={faLinkedin} className="ico" color="blue"/> */}
								<a href="https://react-bootstrap.github.io/components/buttons/"><i className="fab fa-youtube">  <FontAwesomeIcon icon={faYoutube} className="ico " color="red" /></i></a>
								<a href="#"><i className="fab fa-twitter">  <FontAwesomeIcon icon={faTwitter} className="ico " color="#1DA1F2" /></i></a>
								<a href="#"><i className="fab fa-instagram">  <FontAwesomeIcon icon={faInstagram} className="ico " color="#bc2a8d" /></i></a>
								<a href="#"><i className="fab fa-linkedin-in">  <FontAwesomeIcon icon={faLinkedin} className="ico " color="#0072b1" /></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center p-3 bg-black  foot ">

					Copyright © 2023 - WE BUILD. All Rights Reserved.
				</div>
			</footer>


		</body>

	);
};
export default Footer;

