import React from "react";
import DigitSquare from "./CDigitSquare";

class SmallSquare extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     console.log('Im READY SMALL')
    // }

    render() {
    return (
        <div className="big-blue__small" style={{
            borderColor: this.props.color
        }}>
            <DigitSquare number={this.props.number}></DigitSquare>
        </div>
    )
    }
}

export default SmallSquare;