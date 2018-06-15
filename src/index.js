import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import MiracleList from './simple/MiracleList';
import MiracleItem from './simple/MiracleItem';
import GrowStatus from './simple/GrowStatus';

import './reset.css';
import './index.less';

const testArray = [{
    text: '123'
}, {
    text: 'test'
}];

const identify = "adult";

class Index extends Component {
    render() {
        return (<div>
            <MiracleList list={testArray}
                itemClick={(index) => console.log(index)}
            />
            <GrowStatus identify={identify} />
        </div>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
