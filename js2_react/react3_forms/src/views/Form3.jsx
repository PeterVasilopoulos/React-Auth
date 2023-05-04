import React, { useState } from 'react'
import FormDisplay from '../components/FormDisplay'


// form input : onChange, variable that keeps changing
const Form3 = () => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(0)

    // form message
    const [isSubmitted, setIsSubmitted] = useState(false);

    // error message
    const [flavorErr, setFlavorErr] = useState(true);
    const [quantityErr, setQuantityErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (flavorErr || quantityErr) { // "abc" --> true 
            alert("invalid form")
        } else {
            // api call to backend
            // change the view to make it updated
            console.log({ flavor: flavor, quantity: quantity })
            setIsSubmitted(true)
        }
    }

    const formMessage = () => {
        if (isSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Please fill in the form!";
        }
    }

    const handleFlavor = (e) => {
        setFlavor(e.target.value) // setState is async, and it takes time to complete
        if (e.target.value.length < 3) {
            setFlavorErr("Flavor must be at least 3 characters long!")
        } else {
            setFlavorErr("")
        }
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        if (e.target.value < 0) {
            setQuantityErr("Quantity must be positive");
        } else {
            setQuantityErr("");
        }
    }

    return (
        <div>
            <h1> Icecream Form</h1>
            <h1>{formMessage()}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={handleFlavor} />
                    <p style={{ color: "red" }}> {flavorErr}</p>
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity} onChange={handleQuantity} />
                    <p style={{ color: "red" }}> {quantityErr}</p>

                </div>
                <button type="submit" disabled={flavorErr || quantityErr}> Submit</button>
            </form>
            <FormDisplay flavor={flavor} quantity={quantity} />


        </div>
    )
}

export default Form3