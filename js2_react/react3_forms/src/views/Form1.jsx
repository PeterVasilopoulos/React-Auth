import React, { useState } from 'react'
import FormDisplay from '../components/FormDisplay'


// form input : onChange, variable that keeps changing
const Form1 = () => {
    const [flavor, setFlavor] = useState("Chocolate")
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault();
        // api call to backend
        // change the view to make it updated
        console.log({flavor:flavor, quantity:quantity})
    }

    return (
        <div>
            <h1> Icecream Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <button type="submit"> Submit</button>
            </form>
            <FormDisplay flavor={flavor} quantity={quantity} />

        </div>
    )
}

export default Form1