import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {YourLife} from './redux/reducer';


import HMiracleList from './higher/HMiracleList';
import HMiracleInput from './higher/HMiracleInput';

import './reset.css';
import './index.less';

let store = createStore(YourLife);

class Index extends Component {
    render() {
        return (<Provider store={store}>
            <div>
                <HMiracleList />
                <HMiracleInput />
            </div>
        </Provider>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
