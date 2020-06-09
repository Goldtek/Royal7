import React from "react";
import { Redirect } from "react-router-dom";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: props.val };
    }

    render() {
        const x = this;
        const { counter } = this.state;
        setTimeout(function () {
            if (counter > 0) {
                x.setState({ counter: counter - 1 });
            }
        }, 1000);
        return (
            <div>
                {/* {this.props.val}secs, {counter} */}
                {counter ? counter : <Redirect to="/continue" />}
            </div>
        );
    }
}

export default Counter;
