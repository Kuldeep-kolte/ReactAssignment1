import React, { useState } from "react";
import Cls1 from "./Cls1";
function Fun1() {
    const [status, setStatus] = React.useState()
    const [cActive, classActive] = useState();
    return (
        <div className="App container">
            <div className="btn1">
                <button onClick={() => setStatus(!status)}>To see styling in Functional component</button>
                <button className='link ink1' onClick={() => classActive(!cActive)}>
                    To see styling in class component
                </button>
            </div>
            <div className="main ">
                {
                    status ? <><div className="fun1">
                        <h1>This is created using Functional Component</h1>
                        <p className="p1">This is done using external CSS</p>
                        <p style={{ color: "blue" }}>This is done using inline CSS</p>

                    </div></> : null
                }
                {cActive ? <Cls1 /> : null}
            </div>

        </div>
    )
}
export default Fun1;