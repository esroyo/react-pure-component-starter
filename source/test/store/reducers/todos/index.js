import test from 'tape';
import deepFreeze from 'deep-freeze';

import addTodo from 'actions/addTodo';
import toggleTodo from 'actions/toggleTodo';
import todos from 'store/reducers/todos';

test('Reducer: todos', nest => {

    nest.test('...dispatch ADD_TODO', assert => {

        const message = 'should add a todo to the list';

        const stateBefore = [];

        const action = addTodo('Learn Redux');

        const stateExpected = [
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        const stateActual = todos(stateBefore, action);

        assert.deepEqual(stateActual, stateExpected, message);
        assert.end();

    });

    nest.test('...dispatch TOGGLE_TODO', assert => {

        const message = 'should toggle the todo';

        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            }
        ];

        const action = toggleTodo(1);

        const stateExpected = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        const stateActual = todos(stateBefore, action);

        assert.deepEqual(stateActual, stateExpected, message);
        assert.end();

    });

});
