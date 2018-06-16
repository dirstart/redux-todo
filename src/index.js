import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Wisdom from './simple/Wisdom';
import {todoApp} from './redux/reducers';
import LinkTodoInput from './higher/LinkTodoInput';
import LinkTodoList from './higher/LinkTodoList';

let store = createStore(todoApp);

class Index extends Component {
    render() { 
        return ( <Provider store={store}>
            <div>
                <Wisdom />
                <LinkTodoList />
                <LinkTodoInput/>
            </div>
        </Provider> )
    }
}
 
ReactDOM.render(<Index />, document.getElementById('root'));