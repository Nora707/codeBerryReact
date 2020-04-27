import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
const initialState= {name:""};
class FormComp extends React.Component {
	
	constructor(props){
		super(props);
		this.state= initialState;
	}
	
	onNameChange=(event)=>{
		let copyState= {...this.state};
		copyState= event.target.value;
		this.setState({name:copyState});
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
								<input type="text" onChange={this.onNameChange}></input>
							</label>
							<input type='submit'/>
						</form>
	
					</div>
					<div className="form-output">
						<h1>Output</h1>
						<p> {this.state.name}</p>
					</div> 
				</div>
			
		);
	}
}

ReactDOM.render(<FormComp/>, document.getElementById('root'));