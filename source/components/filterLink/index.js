import { connect } from 'react-redux';

import createLink from 'components/link';
import setVisibilityFilter from 'actions/setVisibilityFilter';

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    };
};
const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

export default React => connect(
    mapStateToProps,
    mapDispatchToProps
)(createLink(React));
