import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
const initialState= {name:"",
age:0,
food:"",
pet:false};
class FormComp extends React.Component {
	
	constructor(props){
		super(props);
		this.state= initialState;
	}
	
	onFormChange=(event)=>{
		let copyState= {...this.state};
		copyState= event.target.value;
		const name = event.target.name;
		this.setState({[name]:copyState});
	}
	
	nameSubmit=(event)=>{
		event.preventDefault();
		alert("We are submitting");
		console.log("submit");
		event.currentTarget.reset();
		this.setState(initialState);
	}
	
	render(){
		return (
			
				<div className="container">
					<div className="form-input">
						<h1>Form</h1>
						 <form onSubmit={this.nameSubmit}>
							<label>
								Name: 
								<input name="name" type="text" onChange={this.onFormChange}></input>
							</label>
								<label>
								Age: 
								<input name="age" type="text" onChange={this.onFormChange}></input>
							</label>
								<label>
								Favorite food: 
								<input name="food" type="text" onChange={this.onFormChange}></input>
							</label>
								<label>
								Has pet: 
								<input name="pet" type="radio" onChange={this.onFormChange}></input>
							</label>
							<input type='submit'/>
						</form>
	
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

ReactDOM.render(<FormComp/>, document.getElementById('root'));