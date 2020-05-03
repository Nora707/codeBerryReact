import React from 'react';
import {formatCurrency} from '../Helper';

class Fish extends React.Component {
    render() {
        const {name, image, price, desc, status} = this.props.fish;
        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image}/>
                <h3 className="fish-name">{name}</h3>
                <span className="price">{formatCurrency(price)}</span>
                <p>{desc}</p>
                <button disabled={!isAvailable}
                        onClick={()=>this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to cart' : 'Sold out'} </button>
            </li>
        )
    }
}

export default Fish;