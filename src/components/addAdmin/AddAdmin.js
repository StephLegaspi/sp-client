import React, { Component } from 'react';
import {Button, Row, CardPanel, Input} from 'react-materialize';


export default class AddAdmin extends Component {

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
						</Row>
					</CardPanel>

					<Button waves='light' method="POST">
						ADD
					</Button>	
				</Row>

			</div>
		);
	}
}



const style = {
	height: 570,
	width: '50%',
	marginTop: '10%',
	marginLeft: '25%',
	marginRight: '25%',
	textAlign: 'center',
	
};