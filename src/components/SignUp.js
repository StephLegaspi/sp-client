import React, { Component } from 'react';

import "./index.css";
import {Button, Icon, Row, Col, CardPanel, Input, Navbar, NavItem} from 'react-materialize';


export default class SignUp extends Component {

	constructor() {
		super();

		this.state = {
			shipper_name: "",
			contact_number: "",
			email: "",
			company_name: "",
			pickup_address: "",
			account_number: "",

			quantity: 0,
			description: "",
			size: ""
		}

		this.handleshipper_nameChanged = this.handleshipper_nameChanged.bind(this);
		this.handleContactChanged = this.handleContactChanged.bind(this);
		this.handleEmailChanged = this.handleEmailChanged.bind(this);
		this.handleCompanyChanged = this.handleCompanyChanged.bind(this);
		this.handleAddressChanged = this.handleAddressChanged.bind(this);
		this.handleAccountChanged = this.handleAccountChanged.bind(this);

		this.handleQuantityChanged = this.handleQuantityChanged.bind(this);
		this.handleDescChanged = this.handleDescChanged.bind(this);
		this.handleSizeChanged = this.handleSizeChanged.bind(this);

		 this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleshipper_nameChanged(e) { this.setState({shipper_name: e.target.value}); }
	handleContactChanged(e) { this.setState({contact_number: e.target.value}); }
	handleEmailChanged(e) { this.setState({email: e.target.value}); }
	handleCompanyChanged(e) { this.setState({company_name: e.target.value}); }
	handleAddressChanged(e) { this.setState({pickup_address: e.target.value}); }
	handleAccountChanged(e) { this.setState({account_number: e.target.value}); }

	handleQuantityChanged(e) { this.setState({quantity: e.target.value}); }
	handleDescChanged(e) { this.setState({description: e.target.value}); }
	handleSizeChanged(e) { this.setState({size: e.target.value}); }

	handleSubmit(event) {
		console.log(this.state.shipper_name);
        event.preventDefault()
       
        fetch(`http://localhost:3001/booking/add-booking`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)

        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log("Success");    
        }).catch(function(err) {
            console.log(err)
        });
    }



	render(){
		return(
			<div>
				<nav class="nav-extended" style={bg_color}>
					<div class="nav-wrapper">
					    <a style={nav_font_style} href="#" class="brand-logo"><h1>Logo</h1></a>
					    <div class="nav-wrapper">
					    
						    <ul  id="nav-mobile" class="right hide-on-med-and-down" >
						        <li><a style={nav_font_style} class="active class" href="sass.html">Portfolio</a></li>
						        <li><a style={nav_font_style} href="badges.html">Contact Us</a></li>
						        <li><a style={nav_font_style} href="collapsible.html">Sign Up</a></li>
						        <li><a style={nav_font_style} href="collapsible.html">Login</a></li>
						    </ul>
						</div>
					</div>
					<div class="nav-content" style={nav2_margin}>
					    <ul class="tabs tabs-transparent">
					        <li class="tab"><a style={nav_font_style}  href="#test1">Home</a></li>
					        <li class="tab"><a style={nav_font_style}  href="#test2">Shop</a></li>
					        <li class="tab"><a style={nav_font_style} href="#test3">Catering Package</a></li>
					        <li class="tab"><a style={nav_font_style} href="#test4">Menu</a></li>
					        <li class="tab"><a style={nav_font_style} href="#test4">Motif</a></li>
					        <li class="tab"><a style={nav_font_style} href="#test4">Request Package</a></li>
					    </ul>
					</div>
					
				</nav>

				<Row style={style}>
					<CardPanel classshipper_name="white black-text">
					    <Row>
	
						    <Input  s={4} label="First name" onChange={this.handleshipper_nameChanged}/>
						    <Input type="email" label="Middle Name" s={4} onChange={this.handleEmailChanged}/>
						    <Input s={4} label="Last Name" onChange={this.handleContactChanged}/>
						    <Input label="Email Address" s={6} onChange={this.handleCompanyChanged}/>
						    <Input label="Password" s={6} onChange={this.handleAddressChanged}/>
						    <Input label="Address" s={12} onChange={this.handleQuantityChanged}/>
						    <Input label="Zip Code" s={6} onChange={this.handleDescChanged}/>
						    <Input label="Contact Number" s={6} onChange={this.handleAccountChanged}/>
						</Row>
					</CardPanel>

					<Button waves='light' onClick={this.handleSubmit} method="POST">
						Sign Up
					</Button>	
				</Row>

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

