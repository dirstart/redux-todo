import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {YourLife} from './redux/reducer';


import HMiracleList from './higher/HMiracleList';

import './reset.css';
import './index.less';

let store = createStore(YourLife);

class Index extends Component {
    render() {
        return (<Provider store={store}>
            <HMiracleList />
        </Provider>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
