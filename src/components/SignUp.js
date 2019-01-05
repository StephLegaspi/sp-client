import React, { Component } from 'react';

import "./index.css";
import {Button, Icon, Row, Col, CardPanel, Input, Navbar, NavItem} from 'react-materialize';


export default class SignUp extends Component {

	constructor() {
		super();
	}



	render(){
		return(
			<div>
					<ul id="dropdown1" class="dropdown-content">
					  <li><a href="https://www.jquery-az.com/6-examples-materialize-modals-live-demos-code/">one</a></li>
					  <li><a href="#">two</a></li>
					  <li class="divider"></li>
					  <li><a href="#">three</a></li>
					</ul>
					<nav>
					    <div class="nav-wrapper">
					      <a href="#" class="brand-logo">Logo</a>
					      <ul id="nav-mobile" class="right hide-on-med-and-down">
					        
					        <li><a class="dropdown-trigger" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
					      </ul>
					    </div>
					</nav>



				<footer class="page-footer" style={bg_color}>
		          <div class="container">
		            <div class="row">
		              <div class="col l6 s12">
		                <h5 class="white-text">Footer Content</h5>
		                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
		              </div>
		              <div class="col l4 offset-l2 s12">
		                <h5 class="white-text">Links</h5>
		                <ul>
		                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
		                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
		                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
		                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		          <div class="footer-copyright" style={bg_color2}>
		            <div style={footer2} class="container">
		            	© 2019 Leira Jane's Party Needs and Catering Services
		            </div>
		  
		          </div>
		        </footer>
			</div>


		);
	}
}



const style = {
	height: 570,
	width: '90%',
	marginTop: '50px',
	marginLeft: '5%',
	marginRight: '5%',
	textAlign: 'center',
	
};

const nav2_margin = {
	marginLeft: '17%'
};

const bg_color = {
	backgroundColor: '#191167'
};

const bg_color2 = {
	backgroundColor: '#f89d28'
};

const nav_font_style = {
	color: 'white',
	fontSize: '18px'
};

const footer2 = {
	color: 'white',
	fontSize: '12px',
	fontWeight: 'bold',
	textAlign: 'center'
};

