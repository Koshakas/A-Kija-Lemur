import { useEffect, useRef, useState } from "react";

function App() {
    const [color, setColor] = useState("#777");
    const [size, setSize] = useState("10px");

    const first = useRef(true);

    useEffect(() => {
        if (!first.current) {
            console.log("App EFFECT CORO run");
        } else {
            first.current = false;
        }
    }, [color]);

    useEffect(() => {
        console.log("app effect COLOR ");
    }, [color]);

    useEffect(() => {
        console.log("app effect SIZE");
    }, [size]);

    const randomColor = () => {
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    };

    const randomSize = () => {
        setSize(10 + Math.floor(Math.random() * 40) + "px");
    };

    return (
        <div className="App col">
            <h1
                style={{
                    color: color,
                    fontSize: size
                }}
            >
                Sekmadienis
            </h1>
            <div>
                <button className="button pink" onClick={randomColor}>
                    Random color
                </button>
                <button className="button gray" onClick={randomSize}>
                    Random Size
                </button>
            </div>
        </div>
    );
}

export default App;
