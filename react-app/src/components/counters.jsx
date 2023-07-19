import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
 

    render() { 
        return (
            <>
            <button onClick={this.props.onReset} className="rounded p-2 m-2 bg-blue-600 text-white">Reset</button>
            {this.props.counters.map(counter=>(
                <Counter onDecrement={()=>this.props.onDecrement(counter)} onIncrement={()=>this.props.onIncrement(counter)} onDelete={()=>this.props.onDelete(counter.id )} key={counter.id} counter={counter}/>
            ))}
             
            </>
           
        );
    }
}
 
export default Counters;