import { useState } from "react";

function TextInput({ whatText }) {
    const [text, setText] = useState("Labas");

    const changed = e => {
        setText(e.target.value);
    };

    return (
        <div className="m-3">
            <input type="text" onChange={changed} value={text} />
            <button onClick={() => whatText(text)} className="button">
                Go!
            </button>
        </div>
    );
}

export default TextInput;
