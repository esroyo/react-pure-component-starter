import { connect } from 'react-redux';

import addTodo from 'actions/addTodo';

export default React => {

    const AddTodo = ({ dispatch }) => {
        let input;

        return (
            <div>
                <input ref={node => {
                    input = node;
                }} />
                <button
                    onClick={() => {
                        dispatch(addTodo(input.value));
                        input.value = '';
                    }}
                >
                    Add Todo
                </button>
            </div>
        );
    };

    return connect()(AddTodo);
};
