import { useState } from "react";

function Radio() {
    const defaultRadio = [false, false, false, false];
    const [radio, setRadio] = useState([false, false, false, false]);

    const control = e => {
        const i = e.target.value;
        const radioCopy = [...defaultRadio];
        radioCopy[i] = !radioCopy[i];
        setRadio(radioCopy);
    };
    return (
        <div className="m-3">
            <input onChange={control} type="radio" name="radio" value="0" checked={radio[0]} />
            <input onChange={control} type="radio" name="radio" value="1" checked={radio[1]} />
            <input onChange={control} type="radio" name="radio" value="2" checked={radio[2]} />
            <input onChange={control} type="radio" name="radio" value="3" checked={radio[3]} />
        </div>
    );
}

export default Radio;
