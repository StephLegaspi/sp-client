import React, { Component } from 'react';
import './index.css'
import {Button, Row, CardPanel, Input} from 'react-materialize';


export default class SignUp extends Component {

	constructor() {
		super();

	}

	render(){
		return(
			<div>
			
				<Row style={style}>
					<CardPanel>
					    <Row>
						    <Input  s={4} label="First name"/>
						    <Input s={4} label="Middle name"/>
						    <Input s={4} label="Last name"/>
						    <Input s={6} type="email" label="Email Address"/>
						    <Input s={6} label="Password"/>
						    <Input s={12} label="Address"/>
						    <Input s={6} label="Zip Code"/>
						    <Input s={6} label="Contact Number"/>
						</Row>
					</CardPanel>

					<Button waves='light' method="POST">
						Sign Up
					</Button>	
				</Row>

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