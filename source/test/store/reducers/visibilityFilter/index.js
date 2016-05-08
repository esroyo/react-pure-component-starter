import test from 'tape';
import deepFreeze from 'deep-freeze';

import setVisibilityFilter from 'actions/setVisibilityFilter';
import visibilityFilter from 'store/reducers/visibilityFilter';

test('Reducer: visibilityFilter', nest => {

    nest.test('...dispatch SET_VISIBILITY_FILTER', assert => {

        const message = 'should set the visibility filter';

        const stateBefore = 'SHOW_ALL';

        const action = setVisibilityFilter('SHOW_ACTIVE');

        const stateExpected = action.filter;

        deepFreeze(stateBefore);
        deepFreeze(action);

        const stateActual = visibilityFilter(stateBefore, action);

        assert.deepEqual(stateActual, stateExpected, message);
        assert.end();
    });

});
