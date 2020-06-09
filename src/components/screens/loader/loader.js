import React, { Component } from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
`;

class Loader extends Component {
    render() {
        return (
            <HashLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={this.props.loading}
            />
        );
    }
}

export default Loader;
