import React from 'react';
import ReactDOM from 'react-dom';


class StorePicker extends React.Component{
	render(){
		return (
			<form className="selector">
				<h2>Please enter a game</h2>
				<input type="text" required placeholder="type the name"></input>
				<button type="submit">Visit game </button>
			</form>
		)
	}
}
 export default StorePicker;