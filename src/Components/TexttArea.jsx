import { useState } from "react";

function TextArea() {
    const [text, setText] = useState("Labukas");

    const change = e => {
        setText(e.target.value);
    };

    return (
        <div className="col m-3">
            <textarea onChange={change} value={text}></textarea>
        </div>
    );
}

export default TextArea;
