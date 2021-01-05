import React, { Component } from 'react';
import Counter from './counter';
import Navbar from './navbar';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ],
        id:4,
     }
     delete=(counterid)=>{
        const counters=this.state.counters.filter(c => c.id!==counterid)
        this.setState({counters});
     }
     onreset=()=>{
         const counters=this.state.counters.map(c=>{
             c.value=0;
             return c;
            });
         this.setState({counters});
     }
     increment=(counter)=>{
        const counters= [...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value++;
        this.setState({counters});
    }
    addition=()=>{
        const counters=this.state.counters;
        this.state.id++;
        counters.push({id:this.state.id,value:0});
        this.setState({counters});
    }
    deleteall=()=>{
        this.state.id=0;
        const counters=this.state.counters;
        counters.splice(0,counters.length);
        this.setState({counters})
    }
    render() { 
        return (
            <div>
                <Navbar totalcounter={this.state.counters.filter(c=>c.value>0).length} />
                <div className="container">
                    <button onClick={this.onreset} className="btn btn-primary m-2">Reset</button>
                    <button onClick={this.addition} className="btn btn-success">Add</button>
                    <button onClick={this.deleteall} className="btn btn-danger m-2">Delete All</button>
                    {this.state.counters.map(counters => <Counter key={counters.id} counter={counters} onincrement={this.increment} ondelete={this.delete}/>)}
                </div>
            </div>
         );
    }
}
 
export default Counters;