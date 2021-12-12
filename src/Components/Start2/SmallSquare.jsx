import DigitSquare from "./DigitSquare";

function SmallSquare({color, number}) {

    return (
        <div className="big-blue__small" style={{
            borderColor: color
        }}>
            <DigitSquare number={number}></DigitSquare>
        </div>
    )
}

export default SmallSquare;