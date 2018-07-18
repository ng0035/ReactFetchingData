import React, { Component } from 'react';

class ItemList extends Component{
  //this is the non-redux version of fetching data! using id and label passing to list <li>  
    constructor(){
        super();

        this.state={
            //items array and two booleans to check rendering
            items: [
                {
                    id: 1,
                    label: 'one'
                },
                {
                    id: 2,
                    label: 'two'
                },
                {
                    id: 3,
                    label: 'three'
                },
                {
                    id: 4,
                    label: 'four'
                }
            ],
            hasErrored: false,
            isLoading: false,
        };

    }
    render(){
        if(this.state.hasErrored){
            return<p>Sorry, there has been an error loading!</p>
        }
        if(this.state.isLoading){
            return<p>Loading...</p>
        }
        return(
            <ul>
                {this.state.items.map((item)=>(
                    <li key={item.id}>  
                    {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}
export default ItemList;