import React, { Component } from 'react';

class Counter extends Component {
   
  

     formatCount(){
    const {value} = this.props.counter;
        return value === 0?"zero":value;
     }
     getBadge(){
        const {value} = this.props.counter;
        let classes = "rounded px-2 text-center text-white m-2 ";
        classes += value===0?"bg-yellow-500":"bg-blue-700";
        return classes;
     }

 


    render() { 

        return (
            <div>
                <span  className={this.getBadge()}>{this.formatCount()}</span>
                <button onClick={this.props.onIncrement} className='bg-gray-600 rounded py-1 px-2 m-2 text-white'>Increment</button>
                <button onClick={this.props.onDecrement} className="rounded py-1 px-2 m-2 bg-gray-800 text-white">Decrement</button>
                <button onClick={this.props.onDelete} className="rounded bg-red-700 m-2 p-1">Delete</button>
            </div>
        );
    }
}
 
export default Counter;