import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component{
	constructor(props){
		super(props);
		
	}
	
	onFormChange=(event)=>{
		this.props.changing(event);
	}
	
	submitting=(event)=>{
		event.preventDefault();
		alert("Submitting is in progress");
		this.props.reseting(event);
	}
	
	render(){
		return (
			<form onSubmit={this.submitting}>
							<label>
								Name: 
								<input name="name" type="text" onChange={this.onFormChange}></input>
							</label>
								<label>
								Age: 
								<input name="age" type="number" onChange={this.onFormChange}></input>
							</label>
								<label>
								Favorite food: 
								<input name="food" type="text" onChange={this.onFormChange}></input>
							</label>
								<label>
								Has pet: 
								<input name="pet" type="checkbox" onChange={this.onFormChange}></input>
							</label>
							<input type='submit'/>
						</form>
		);
	}
}

export default Form;