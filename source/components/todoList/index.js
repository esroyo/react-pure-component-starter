import createTodo from 'components/todo';

export default React => {

    const Todo = createTodo(React);

    return ({
        todos,
        onTodoClick
    }) => (
        <ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            ))}
        </ul>
    );

};
