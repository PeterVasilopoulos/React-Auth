import React, {useState} from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0) // initial value of count : 0

    const alertWednesday = ()=>{
        alert("Wednesday");
    }

    const doubleCount = ()=>{
        setCount(count *2);
    }

// count = count +1
    return (
        <fieldset>
            <legend> CounterComponent.jsx</legend>
            <button onClick={() => alert("Hi")}> Alert Me!</button>
            <button onClick={alertWednesday}> Alert Wednesday!</button>

            <h1> Count: {count}</h1>
            <button onClick={()=> setCount(count+1)}> Add count</button>
            <button onClick={doubleCount}> Double count</button>
            {
                count>100?
                <h1> You hit 100!!!!</h1>:
                <h1> Hit more!!!</h1>
            }

        </fieldset>
    )
}

export default CounterComponent