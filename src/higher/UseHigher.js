import React, { Component } from 'react';
import CreateHigher from './CreateHigher';


// 通常我们会把用户名保留在 localStorage 中
class InputUsername extends Component {
    render() { 
        return (<div>
            <input value={this.props.data || ''} />
        </div>)  
    }
}

InputUsername = CreateHigher(InputUsername, 'username');

export default InputUsername;
 
