import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import React, { Component } from 'react';

class ItemsListRedux extends Component{
  //this is the redux version of fetching data! using id and label passing to list <li>  
  componentDidMount(){
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
    render(){
        if(this.props.hasErrored){
            return<p>Sorry, there has been an error loading!</p>
        }
        if(this.props.isLoading){
            return<p>Loading...</p>
        }

        return(
            <ul>
                {this.props.items.map((item)=>(
                    <li key={item.id}>  
                    {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.items,
        hasErrored: state.itemHasErrored,
        isLoading: state.itemIsLoading
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchData: (url) =>dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemsListRedux);