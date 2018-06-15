import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import UseHigher from './higher/UseHigher';

import './reset.css';
import './index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '123'
        }
    }
    render() {
        return (<div>
            <UseHigher/>
        </div>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
