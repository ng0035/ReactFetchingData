import React, { Component } from 'react';
import ItemList from './components/ItemList';
import DynamicList from './components/DynamicList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ITEMS</h1>
        <ItemList/>
        <DynamicList/>
      </div>
    );
  }
}

export default App;
