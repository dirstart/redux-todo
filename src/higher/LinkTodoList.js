import {connect} from 'react-redux';
import SfTodoList from '../simple/SfTodoList';
import { toggleTodo } from '../redux/actions';
 
const mapStateToProps = state => {
    switch(state.filterType) {
        case 'START':
            return {todos: state.todos.filter(item => !item.finished)};
        case 'END':
            return {todos: state.todos.filter(item => item.finished)};
        case 'ALL':
        default:
            return {todos: state.todos};
    }
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