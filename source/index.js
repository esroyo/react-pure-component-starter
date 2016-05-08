import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import createTodoApp from 'components/todoApp';
import todoApp from 'store/reducers/todoApp';

const TodoApp = createTodoApp(React);
const store = createStore(todoApp);

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    console.log(store.getState());
});
