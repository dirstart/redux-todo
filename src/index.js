import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {asyncReducer} from './redux/reducers';
import {asyncGetData} from './redux/actions';

const store = createStore(
    asyncReducer,
    applyMiddleware(
        thunk
    )
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(asyncGetData());

class Index extends Component {
    render() { 
        return <Provider store={store}>
            <div>
                123
            </div>
        </Provider>
    }
}
 
ReactDOM.render(<Index />, document.getElementById('root'));