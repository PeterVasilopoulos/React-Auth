import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter'
import SiblingDisplay from '../components/callback/SiblingDisplay'

const CallbackContainer = () => {
    // TODO: Create a variable to pass down to the parent (what if the variable will change here?)
    const [count, setCount] = useState(0)

    // TODO: create a function for the child
    const addCount =()=>{
        setCount(count+1)
    }

    const minusCount =()=>{
        setCount(count-1)
    }

    return (
        <fieldset style={{ backgroundColor: "gainsboro" }}>
            <legend> CallbackContainer.jsx</legend>
            <h1> Change the count from the counter!</h1>
            <SiblingCounter editCount ={addCount}/>
            <SiblingCounter editCount ={minusCount}/>
            <SiblingDisplay count={count}/>
            <p> Parent count : {count}</p>

        </fieldset>
    )
}

export default CallbackContainer