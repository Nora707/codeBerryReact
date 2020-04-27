import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class FormComp extends React.Component {
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
			
				<div className="container">
					<div className="form-input">
						<h1>Form</h1>
						<form>
							<label>
								Name: 
								<input type="text" label="Name"></input>
							</label>
						</form>
					</div>
					<div className="form-output">
						<h1>Output</h1>
					</div> 
				</div>
			
		);
	}
}

ReactDOM.render(<FormComp/>, document.getElementById('root'));