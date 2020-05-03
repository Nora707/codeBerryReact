import React from 'react';


class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" ref={this.nameRef} defaultValue="Name"/>
                <input name="price" type="text" ref={this.priceRef} placeholder="Price"/>
                <select name="status" ref={this.statusRef} placeholder="Status">
                    <option value="available">Available</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea name="desc" ref={this.descRef}/>
                <input name="image" type="text" ref={this.imageRef} placeholder="Image"/>
                <button type="submit">+ Add fish</button>
            </form>
        )
    }
}

export default AddFishForm;