import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Change() {
    const [color, setColor] = useState("black");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <>
            <h1>Background Color Changer</h1>

            <div className="but">
                <button onClick={() => setColor("red")}>
                    Red
                </button>

                <button onClick={() => setColor("blue")}>
                    Blue
                </button>

                <button onClick={() => setColor("green")}>
                    Green
                </button>

                <button onClick={() => setColor("yellow")}>
                    Yellow
                </button>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Change />
);