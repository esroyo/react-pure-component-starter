import test from 'tape';

import addTodo from 'actions/addTodo';
import toggleTodo from 'actions/toggleTodo';
import setVisibilityFilter from 'actions/setVisibilityFilter';

test('Actions', nest => {

    nest.test('...addTodo', assert => {

        const message = 'should generate an ADD_TODO action';

        const expected = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };

        const actual = addTodo('Learn Redux');

        assert.deepEqual(actual, expected, message);
        assert.end();

    });

    nest.test('...toggleTodo', assert => {

        const message = 'should generate an TOGGLE_TODO action';
        const id = 1;

        const expected = {
            type: 'TOGGLE_TODO',
            id
        };

        const actual = toggleTodo(id);

        assert.deepEqual(actual, expected, message);
        assert.end();

    });

    nest.test('...setVisibilityFilter', assert => {

        const message = 'should generate a SET_VISIBILITY_FILTER action';
        const filter = 'SHOW_ALL';

        const expected = {
            type: 'SET_VISIBILITY_FILTER',
            filter
        };

        const actual = setVisibilityFilter(filter);

        assert.deepEqual(actual, expected, message);
        assert.end();

    });

});
