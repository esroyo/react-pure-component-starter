import React from 'react';
import {
    renderToStaticMarkup as render
} from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createTodo from 'components/todo';

const Todo = createTodo(React);

test('Component: Todo', nest => {

    nest.test('...not completed', assert => {

        const message = 'should render no text-decoration';

        const props = {
            completed: false,
            test: 'Learn Redux',
            onClick: () => {}
        };

        const el = <Todo { ...props } />;
        const $ = dom.load(render(el));

        const actual = $('li').filter(function () {
            return $(this).css('text-decoration') === 'none';
        }).length;

        const expected = 1;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...completed', assert => {

        const message = 'should render lined-through';

        const props = {
            completed: true,
            test: 'Learn Redux',
            onClick: () => {}
        };

        const el = <Todo { ...props } />;
        const $ = dom.load(render(el));

        const actual = $('li').filter(function () {
            return $(this)
                .css('text-decoration') === 'line-through';
        }).length;

        const expected = 1;

        assert.equal(actual, expected, message);
        assert.end();
    });

});
