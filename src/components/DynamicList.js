import React, { Component } from 'react';

class DynamicList extends Component{
  //this is the non-redux version of fetching data! using id and label passing to list <li> dynamically 
    constructor(){
        super();
        this.state={
            //items array and two booleans to check rendering
            items: [],
            isErrored: false,
            isLoading: false,
        };
    }
    fetchData(url){
        this.setState({ isLoading: true})

        fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText);
            }
            this.setState({isLoading: false});

            return response;
        })
        .then((response)=>response.json())
        .then((items)=>this.setState({items}))
        .catch(()=>this.setState({hasErrored: true}))
    }
    componentDidMount(){
        this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
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
export default DynamicList;