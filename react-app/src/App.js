import React, { Component } from "react";
import { Outlet } from "react-router";
import { Wrapper } from "./components/layout-components/wrapper.component";

class App extends Component {
  render() {
    return <Wrapper></Wrapper>;
  }
}

export default App;

// {/* <Counters onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters} onReset={this.handleReset}/> */}

//   state = {
//     counters:[
//       {id:1, value:0},
//       {id:2, value:0},
//       {id:3, value:0},
//       {id:4, value:0}
//   ]
//    };

//  handleDelete=(id)=>{
//   const del = this.state.counters.filter(c=>c.id !== id);
//   this.setState({counters:del})
//  }

//  handleReset=()=>{
//     const counters = this.state.counters.map(c=>{
//         c.value=0;
//         return c;
//     })
//     this.setState({counters})
//  }
//  handleIncrement=(counter)=>{
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter)
//     counters[index]={...counter};
//     counters[index].value++;

//     this.setState({counters})
//     console.log(counters[index]);
//  }

//  handleDecrement=(counter)=>{
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index]={...counter};
//     if(counters[index].value>0){
//       counters[index].value--;
//       this.setState({counters})

//     }

//  }
