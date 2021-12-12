import SmallSquare from "./Components/Start2/SmallSquare";
import digitSquares from "./Data/digitSquares";

function App() {

    return (
        <div className="App">
            <div className="big-blue">
                <SmallSquare color={'crimson'} number={5}></SmallSquare>
                <SmallSquare color={'orange'} number={7}></SmallSquare>
                <SmallSquare color={'lime'} number={8}></SmallSquare>
                <SmallSquare color={'brown'} number={19}></SmallSquare>
            </div>
            <div className="big-blue">
                {
                    digitSquares.map((s, i) => <SmallSquare key={i} color={s.color} number={s.number}></SmallSquare>)
                }
            </div>
        </div>
    )
}

export default App;