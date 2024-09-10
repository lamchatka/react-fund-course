import React from "react";

class ClassCounter extends React.Component {
// КЛАССОВЫЕ КОМПОНЕНТЫ НЕ МОГУТ ИСПОЛЬЗОВАТЬ ХУКИ

    constructor(props) {
       super(props);
       this.state = {
            count: 0,   
       }
       
       // ИЗ-ЗА ОСОБЕННОСТЕЙ КОНТЕКСТА НЕОБХОДИМО ЯВНО ЗАБИНДИТЬ THIS ПЕРЕД ЕГО ИСПОЛЬЗОВАНИЕМ
       this.increment = this.increment.bind(this);
       this.decrement = this.decrement.bind(this);
       this.print = this.print.bind(this);
    }
    // ВАЖНО ИЗУЧИТЬ КОНТЕКСТ
    decrement() {
       this.setState({count: this.state.count - 1});
    }
    // ВАЖНО ИЗУЧИТЬ КОНТЕКСТ
    increment() {
        this.setState({count: this.state.count + 1});
    }

    print() {
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={ this.increment }>Increment</button>
            <button onClick={ this.decrement }>Decrement</button>
            <button onClick={ this.print }>Print</button>

        </div>
        );
    }
}

export default ClassCounter;