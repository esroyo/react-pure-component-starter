import React from 'react';
import {
    renderToStaticMarkup as render
} from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createLink from 'components/link';

const Link = createLink(React);

test('Component: Link', nest => {

    nest.test('...not active', assert => {

        const message = 'should render as an <a> tag';

        const props = {
            active: false,
            children: 'All',
            onClick: () => {}
        };

        const el = <Link { ...props } />;
        const $ = dom.load(render(el));
        const actual = $(':root').is('a');
        const expected = true;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...active', assert => {

        const message = 'should render as a <span> tag';

        const props = {
            active: true,
            children: 'All',
            onClick: () => {}
        };

        const el = <Link { ...props } />;
        const $ = dom.load(render(el));
        const actual = $(':root').is('span');
        const expected = true;

        assert.equal(actual, expected, message);
        assert.end();
    });

    nest.test('...always', assert => {

        const message = 'should output the correct children';

        const props = {
            active: false,
            children: 'All',
            onClick: () => {}
        };
        const re = new RegExp(props.children, 'g');

        const el = <Link { ...props } />;
        const $ = dom.load(render(el));
        const output = $(':root').html();
        const actual = re.test(output);
        const expected = true;

        assert.equal(actual, expected, message);
        assert.end();
    });

});
