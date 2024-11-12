import React, { useState } from 'react'

function ReactCounter() {

    const [counter,setCounter] = useState(0);

    return (

        <>
            <h2>--- React Module  --- React Counter ---</h2>


            <div className="counter">

                <div>

                    <p>React Web</p>

                    <b>{counter}</b>

                    <div className="counterbtns">

                        <button type="button" onClick={() => {
                            setCounter(counter-1)
                        }}>Decrement</button>

                        <button type="button" onClick={() => {
                            setCounter(counter+1)
                        }}>Increment</button>

                    </div>

                    <button type='button' onClick={() => {
                        setCounter(0)
                    }}>Reset</button>

                </div>

            </div>

            <hr />

        </>
    )
}

export default ReactCounter