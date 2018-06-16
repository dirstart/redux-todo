import React, { Component } from 'react';

class SfTodo extends Component {
    render() { 
        const {todoItem, onClick} = this.props;
        return ( <div onClick={() => onClick()}>
            当前的信息：<span>{todoItem.text}</span> --------
            是否已经完成了？<span>{todoItem.finished ? '是' : '否'}</span>
        </div> )
    }
}
 
export default SfTodo;