import React from 'react';
import {
    renderToStaticMarkup as render
} from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import test from 'tape';
import dom from 'cheerio';

import addTodo from 'actions/addTodo';
import toggleTodo from 'actions/toggleTodo';
import setVisibilityFilter from 'actions/setVisibilityFilter';
import createTodoApp from 'components/todoApp';
import todoApp from 'store/reducers/todoApp';

const TodoApp = createTodoApp(React);

test('Component: TodoApp', nest => {

    const store = createStore(todoApp);
    const el = (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );

    nest.test('...new', assert => {

        const message = 'should render all basic elements';

        const $ = dom.load(render(el));

        const actual =
            $('input').length === 1 &&
            $('button').length === 1 &&
            $('ul').length === 1 &&
            $('p').length === 1;

        const expected = true;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...adding 2 todos', assert => {

        const message = 'should render 2 active todos';

        store.dispatch(addTodo('Learn Redux'));
        store.dispatch(addTodo('Go shopping'));

        const $ = dom.load(render(el));

        const actual = $('li').filter(function () {
            return $(this).css('text-decoration') === 'none';
        }).length;

        const expected = 2;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...toggling a todo', assert => {

        const message = 'should render 1 active todo';

        const id = store.getState().todos[0].id;
        store.dispatch(toggleTodo(id));

        const $ = dom.load(render(el));

        const actual = $('li').filter(function () {
            return $(this).css('text-decoration') === 'none';
        }).length;

        const expected = 1;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...setting filter to SHOW_ACTIVE', assert => {

        const message = 'should render 1 todo';

        store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));

        const $ = dom.load(render(el));

        const actual = $('li').length;

        const expected = 1;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...setting filter to SHOW_COMPLETED', assert => {

        const message = 'should render 1 todo';

        store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

        const $ = dom.load(render(el));

        const actual = $('li').length;

        const expected = 1;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...setting filter to SHOW_ALL', assert => {

        const message = 'should render 2 todos';

        store.dispatch(setVisibilityFilter('SHOW_ALL'));

        const $ = dom.load(render(el));

        const actual = $('li').length;

        const expected = 2;

        assert.equal(actual, expected, message);
        assert.end();
    });

});
