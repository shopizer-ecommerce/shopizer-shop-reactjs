// import PropTypes from "prop-types";
import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { connect } from "react-redux";

const Loader = ({ isLoading }) => {
    return (
        <div>
            <BounceLoader
                size={100}
                // color={"#fb799c"}
                color={window._env_.APP_THEME_COLOR}
                loading={isLoading}
            />
        </div>
    );
};

// Loader.propTypes = {
//     // isLoading: PropTypes.boolean
// };

const mapStateToProps = state => {
    return {
        isLoading: state.loading.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loader);
// export default Logo;
