import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '123'
        }
    }
    render() {
        return (<div>
            123
        </div>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
