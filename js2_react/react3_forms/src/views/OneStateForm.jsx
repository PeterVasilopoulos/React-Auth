import React, { useState } from 'react'
import FormDisplay from '../components/FormDisplay'


// form input : onChange, variable that keeps changing
const OneStateForm = () => {
    const [formState, setFormState] = useState({
        flavor: "",
        quantity: 0
    })

    const [formError, setFormError] = useState({
        flavor: true,
        quantity: false
    })


    // form message
    const handleInput =(e)=>{
        const keyToUpdate = e.target.name; // flavor
        const valToUpdate = e.target.value; // chocolate
        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        // handle all errors
        const errors = {...formError} // formError is state variable, harder to manipulate
        // if(keyToUpdate === "flavor"){
        //     valToUpdate.length < 3?
        //         errors.flavor = "Flavor must be at least 3 characters":
        //         errors.flavor = ""
        // }else if(keyToUpdate === "quantity"){
        //     valToUpdate < 0?
        //         errors.quantity = "Quantity must be positive":
        //         errors.quantity = ""
        // }

        switch(keyToUpdate){
            case 'flavor':
                valToUpdate.length < 3?
                errors.flavor = "Flavor must be at least 3 characters":
                errors.flavor = ""
                break;
            case 'quantity':
                valToUpdate < 0?
                errors.quantity = "Quantity must be positive":
                errors.quantity = ""
                break;
        }
        setFormError(errors)

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // api call to backend
        // change the view to make it updated
        console.log(formState)
    }
    

    return (
        <div>
            <h1> Icecream Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={formState.flavor} onChange={handleInput}/>
                    <p> {formError.flavor}</p>
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={formState.quantity} onChange={handleInput}/>
                    <p> {formError.quantity}</p>
                </div>
                <button type="submit"> Submit</button>
            </form>
            <FormDisplay flavor={formState.flavor} quantity={formState.quantity} />
            

        </div>
    )
}

export default OneStateForm