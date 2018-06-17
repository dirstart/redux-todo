import {connect} from 'react-redux';
import SfFilter from '../simple/SfFilter';
import {setFilter} from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        isActive: state.filterType === ownProps.filterType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleFilter: (filterType) => dispatch(setFilter(filterType)),
        clearTodos: () => console.log('test')
    };
};

const LinkTodoFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(SfFilter);
 
export default LinkTodoFilter;