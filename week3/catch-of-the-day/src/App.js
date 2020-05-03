import React from 'react';
import './App.css';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import sampleFishes from './sample-fishes';
import Fish from './components/Fish';

class App extends React.Component {
    state = {
        fishes: [],
        order: {}
    };

    addFish = fish => {
        const fishes =this.state.fishes;
        fishes.push(fish);
        this.setState({fishes});
    };

    loadSamples = () => {
        this.setState({fishes: [...sampleFishes]});
    };
    // getFishes= Array.from(this.state.fishes);
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {this.state.fishes.map(fish=><Fish key={fish.name} fish={fish}/>)}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>

            </div>
        )
    }

}

export default App;
