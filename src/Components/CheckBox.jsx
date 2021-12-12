import { useState } from "react";

function CheckBox() {
    const [control, setControl] = useState({
        nr1: false,
        nr2: false,
        nr3: false,
        nr4: false
    });

    const change = id => {
        const cc = { ...control };
        cc[id] = !cc[id];
        setControl(cc);
    };

    return (
        <div>
            <div onClick={() => change("nr1")} className="nice-border">
                <span>Nr. 1</span>
                <input onChange={() => change("nr1")} checked={control.nr1} type="checkbox" />
            </div>
            <div onClick={() => change("nr2")} className="nice-border">
                <span>Nr. 2</span>
                <input onChange={() => change("nr2")} checked={control.nr2} type="checkbox" />
            </div>
            <div onClick={() => change("nr3")} className="nice-border">
                <span>Nr. 3</span>
                <input onChange={() => change("nr3")} checked={control.nr3} type="checkbox" />
            </div>
            <div onClick={() => change("nr4")} className="nice-border">
                <span>Nr. 4</span>
                <input onChange={() => change("nr4")} checked={control.nr4} type="checkbox" />
            </div>
        </div>
    );
}

export default CheckBox;
