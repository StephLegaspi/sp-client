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
			
			
			<nav>
			    <div class="nav-wrapper">
			      <a href="#" class="brand-logo right">Logo</a>
			      <ul id="nav-mobile" class="left hide-on-med-and-down">
			        <li><a class="active" href="sass.html" >Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">JavaScript</a></li>
			      </ul>
			    </div>
			</nav>
			      
			</div>


		);
	}
}



