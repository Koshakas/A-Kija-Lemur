import { useState } from "react";
import Children1 from "./Components/Context/Children1";
import Context from "./Context/Context";

const App = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    return (
        <Context.Provider value={input2}>
            <div className="App col">
                <h1>Hello World,</h1>
                <input type="text" value={input1} onChange={e => setInput1(e.target.value)}></input>
                <input type="text" value={input2} onChange={e => setInput2(e.target.value)}></input>
                <Children1 text={input1} />
            </div>
        </Context.Provider>
    );
};

export default App;
