import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Wisdom from './simple/Wisdom';
import {todoApp} from './redux/reducers';
import SfTodoList from './simple/SfTodoList';
import SfTodo from './simple/SfTodo';

const todos = [{
    text: 'test',
    completed: false
}];

const itemClick = (index) => {
    console.log(index);
};

let store = createStore(todoApp);

class Index extends Component {
    render() { 
        return ( <Provider store={store}>
            <div>
                <Wisdom />
                <SfTodoList todos={todos} itemClick={itemClick} />
            </div>
        </Provider> )
    }
}
 
ReactDOM.render(<Index />, document.getElementById('root'));