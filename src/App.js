import React, { Component } from 'react';

import Wisdom from './simple/Wisdom';
import LinkTodoInput from './higher/LinkTodoInput';
import LinkTodoList from './higher/LinkTodoList';
import LinkTodoFilter from './higher/LinkTodoFilter';



export default class App extends Component {
    render() { 
        return (<div>
                <Wisdom />
                <hr/>
                <LinkTodoList />
                <LinkTodoInput/>
                <hr/>
                <LinkTodoFilter filterType='ALL' />
                <LinkTodoFilter filterType='END' />
                <LinkTodoFilter filterType='START' />
        </div>);
    }
};
 
