import { useState } from "react";
import BlueButton from "./Components/Lift/BlueButton";
import RedButton from "./Components/Lift/RedButton";

function App() {
    const [buttonCount, setButtonCount] = useState(0);

    const plus = () => {
        setButtonCount(buttonCount + 1);
    };

    const [redButtonCount, setRedButtonCount] = useState(100);

    const minus = () => {
        setRedButtonCount(redButtonCount - 1);
    };

    return (
        <div className="App col">
            <div>Labas Rytas</div>
            <BlueButton count={redButtonCount} plus={plus} />
            <RedButton count={buttonCount} minus={minus} />
        </div>
    );
}

export default App;
