import React, { Component } from 'react';
import SfTodo from './SfTodo';

class SfTodoList extends Component {
    render() { 
        const {todos, itemClick} = this.props;
        return ( <ul>
            {
                todos.map((item, index) => {
                    return <SfTodo
                        key={index}
                        todoItem={item}
                        onClick={() => itemClick(item.id)}
                    />
                })
            }
        </ul> )
    }
}
 
export default SfTodoList;