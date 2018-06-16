import {connect} from 'react-redux';
import SfTodoList from '../simple/SfTodoList';
 
const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const LinkTodolist = connect(
    mapStateToProps
)(SfTodoList);

export default LinkTodolist;