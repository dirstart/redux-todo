import React, { Component } from 'react';
import CreateHigher from './CreateHigher';


// 通常我们会把用户名保留在 localStorage 中
class InputUsername extends Component {
    render() { 
        return (<div>
            <input value={this.props.data}
                onChange={this.handleChange.bind(this)}
            />
        </div>)  
    }

    handleChange() {
        console.log('123');
    }
}

InputUsername = CreateHigher(InputUsername, 'username');

export default InputUsername;
 
