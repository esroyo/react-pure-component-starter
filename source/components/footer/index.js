import createFilterLink from 'components/filterLink';

export default React => () => {

    const FilterLink = createFilterLink(React);

    return (
         <p>
            Show:
            {' '}
            <FilterLink
                filter='SHOW_ALL'
            >
                All
            </FilterLink>
            {', '}
            <FilterLink
                filter='SHOW_ACTIVE'
            >
                Active
            </FilterLink>
            {', '}
            <FilterLink
                filter='SHOW_COMPLETED'
            >
                Completed
            </FilterLink>
        </p>

    );
};
