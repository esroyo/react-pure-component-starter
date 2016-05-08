let nextTodoId = 0;

export default (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};
