import React from 'react';


class StorePicker extends React.Component{
	render(){
		return (
			<form className="selector">
				<h2>Please enter a name</h2>
				<input type="text" required placeholder="enter a name"/>
				<button type="submit">Visit store </button>
			</form>
		)
	}
}
 export default StorePicker;