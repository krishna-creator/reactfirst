import React, { Component } from 'react';
class Counter extends Component {
    state={
        
    }
    render() { 
        return ( 
        <div>
            <span className={ this.getbadgeclases() }>{ this.formatCount() }</span>
            <button onClick={()=>this.props.onincrement(this.props.counter)} className="btn btn-sm btn-outline-info">Increment</button>
            <button onClick={()=>this.props.ondelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
    formatCount=()=>{
        const { value }= this.props.counter;
        return value ===0 ? "Zero" : value
    }
    getbadgeclases() {
        let classes = "badge m-2 p-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;