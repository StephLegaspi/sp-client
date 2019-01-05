import React, { Component } from 'react';
//user-defined
import SignUp from './components/signup/SignUp.js';
import AddAdmin from './components/addAdmin/AddAdmin.js';

class App extends Component {
	render() {
		return (
			<div>
				<AddAdmin/>
			</div>
		);
	}
}

export default App;