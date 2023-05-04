import React, { useState } from 'react'
import FormDisplay from '../components/FormDisplay'


// form input : onChange, variable that keeps changing
const Form2 = () => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(0)

    // form message
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(flavor.length<3 || quantity < 0){
            alert("invalid form")
        }else{
            // api call to backend
            // change the view to make it updated
            console.log({flavor:flavor, quantity:quantity})
            setIsSubmitted(true)
        }
    }

    return (
        <div>
            <h1> Icecream Form</h1>
            {
                isSubmitted?
                <h1> Thank you for submitting the form</h1>:
                <h1> Please fill in the form</h1>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>
                    { // if-else
                        flavor.length <3?
                        <p style={{color: "red"}}> Flavor must be at least 3 characters long</p>:
                        <p></p>
                    }
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                    { // if without else
                        quantity < 0 &&
                        <p style={{color: "red"}}> Quantity must be positive</p>
                    }
                </div>
                <button type="submit" disabled={flavor.length<3 || quantity< 0}> Submit</button>
            </form>
            <FormDisplay flavor={flavor} quantity={quantity} />
            

        </div>
    )
}

export default Form2