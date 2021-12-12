import { useState } from "react";
import CheckBox from "./Components/CheckBox";
import Radio from "./Components/Radio";
import Select from "./Components/Select";
import ShowText from "./Components/ShowText";
import TextInput from "./Components/TextInput";
import TextArea from "./Components/TexttArea";

function App() {
    const [showText, setShowText] = useState("nothing");

    const whatText = text => {
        setShowText(text);
    };

    return (
        <div className="App col">
            <ShowText text={showText} />
            <TextInput whatText={whatText} />
            <Select />
            <TextArea />
            <CheckBox />
            <Radio />
        </div>
    );
}

export default App;
