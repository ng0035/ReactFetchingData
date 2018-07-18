import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemsListRedux from './components/ItemsListRedux';

const store = configureStore();


ReactDOM.render(<Provider store = {store}>
                <ItemsListRedux/>
                </Provider>,
document.getElementById('root'));
