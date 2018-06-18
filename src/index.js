import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter ,Switch, Route} from 'react-router-dom';

import {todoApp} from './redux/reducers';
import App from './App';

let store = createStore(todoApp);


class Index extends Component {
    render() {
        return (<Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </HashRouter>
        </Provider>)
    }
};

ReactDOM.render(<Index />, document.getElementById('root'));