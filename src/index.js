import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import './reset.css';
import './app.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '123'
        }
    }
    render() {
        return (<div>
            <h1>123</h1>
            <span>123</span>
        </div>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
