import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

const initialState= {name:"",
	age:0,
	food:"",
	pet:false};
	
class App extends React.Component{
		constructor(props){
		super(props);
		this.state= initialState;
	}
	
	upDateState=(event)=>{
		let copyState= {...this.state};
		copyState= event.target.value;
		const name = event.target.name;
		this.setState({[name]:copyState});
	}
	
	resetState=(event)=>{
		event.currentTarget.reset();
		this.setState(initialState);
	}
	
	render(){
		return (
			
				<div className="container">
					<div className="form-input">
						<h1>Form</h1>
						 <Form changing={this.upDateState}
							reseting={this.resetState}
							name={this.state.name}
							age={this.state.age}
							food={this.state.food}
							pet={this.state.pet}/>
	
					</div>
					<div className="form-output">
						<h1>Output</h1>
						<p>Name:  {this.state.name}</p>
						<p>Age:  {this.state.age}</p>
						<p>Favorite food: {this.state.food}</p>
						<p>Has pet:  {this.state.pet}</p>
					</div> 
				</div>
			
		);
	}
}

export default App;
