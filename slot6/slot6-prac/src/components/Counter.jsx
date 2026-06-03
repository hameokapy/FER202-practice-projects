import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Class Component mounted');
    }
    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            console.log('class count state changed');
        }
    }
    componentWillUnmount() {
        console.log('class Component will unmount');
    }
    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrementCount = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        )
    }

}

export default Counter;