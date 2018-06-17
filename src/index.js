import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

import Wisdom from './simple/Wisdom';
import {todoApp} from './redux/reducers';
import LinkTodoInput from './higher/LinkTodoInput';
import LinkTodoList from './higher/LinkTodoList';
import LinkTodoFilter from './higher/LinkTodoFilter';

import {clearTodos} from './redux/actions';

let store = createStore(todoApp);

let LinkDelete = ({dispatch}) => {
    return (
        <button onClick={(e) => {e.preventDefault();dispatch(clearTodos())}}>clear</button>
    );
};

LinkDelete = connect()(LinkDelete);

class Index extends Component {
    render() { 
        return ( <Provider store={store}>
            <div>
                <Wisdom />
                <hr/>
                <LinkTodoList />
                <LinkTodoInput/>
                <hr/>
                <LinkTodoFilter filterType='ALL' />
                <LinkTodoFilter filterType='END' />
                <LinkTodoFilter filterType='START' />
                <LinkDelete />
            </div>
        </Provider> )
    }
}
 
ReactDOM.render(<Index />, document.getElementById('root'));