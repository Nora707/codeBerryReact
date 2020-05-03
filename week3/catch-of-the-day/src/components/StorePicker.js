import React from 'react';


class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = event => {
        event.preventDefault();
        console.log(this.myInput.current.value);
        this.props.history.push(`/store/${this.myInput.current.value}`)
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a name</h2>
                <input type="text" required placeholder="enter a name" ref={this.myInput}/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker;