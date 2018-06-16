import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';

class LinkTodoInput extends Component {
    render() {
        return ( <form onSubmit={e => this.handleSubmit(e)}>
            <label>输入您想要创造的奇迹：</label>
            <input ref={node => this.input = node} />
            <button type="submit">开始吧，少年</button>
        </form> )
    }

    handleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const text = this.input.value.trim();

        if (!text) {
            alert('要有具体的目标哦少年~');
            return;
        }
        
        dispatch(addTodo(text));
        this.input.value = '';
    }
}
 
LinkTodoInput = connect()(LinkTodoInput);
export default LinkTodoInput;