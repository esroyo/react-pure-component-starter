import { connect } from 'react-redux';

import createTodoList from 'components/todoList';
import toggleTodo from 'actions/toggleTodo';

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos:
            getVisibleTodos(
                state.todos,
                state.visibilityFilter
            )
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};

export default React => connect(
    mapStateToProps,
    mapDispatchToProps
)(createTodoList(React));
