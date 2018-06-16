import {connect} from 'react-redux';
import SfTodoList from '../simple/SfTodoList';
import { toggleTodo } from '../redux/actions';
 
const mapStateToProps = state => {
    let todos = [];
    switch(state.filterType) {
        case 'START':
            todos = state.todos.filter(item => !item.finished);
            break;
        case 'END':
            todos = state.todos.filter(item => item.finished);
            break;
        case 'ALL':
        default:
            todos = state.todos;
    }

    return {todos};
};

const mapDispatchToProps = dispatch => {
    return {
        itemClick: id => {
            dispatch(toggleTodo(id));
        }
    };
};

const LinkTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SfTodoList);

export default LinkTodoList;