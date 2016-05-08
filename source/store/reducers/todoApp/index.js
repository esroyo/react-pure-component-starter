import { combineReducers } from 'redux';

import todos from 'store/reducers/todos';
import visibilityFilter from 'store/reducers/visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
});
