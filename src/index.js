import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import Wisdom from './simple/Wisdom';
import {todoApp} from './redux/reducers';
import {addTodo, setFilter} from './redux/actions';

let store = createStore(todoApp);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo('123'));
store.dispatch(addTodo('ljflwfe'));
store.dispatch(setFilter('partly'));


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Wisdom />
        </div> )
    }
}
 
ReactDOM.render(<Index />, document.getElementById('root'));