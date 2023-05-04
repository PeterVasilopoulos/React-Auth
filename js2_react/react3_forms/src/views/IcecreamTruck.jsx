import React, { useState } from 'react'
import FormDisplay from '../components/FormDisplay'


// form input : onChange, variable that keeps changing
const IcecreamTruck = () => {
    // state variable to keep track of the icecream list
    const [icecreamList, setIcecreamList] = useState([]);


    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(0)

    // form message
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (flavor.length < 3 || quantity < 0) {
            alert("invalid form")
        } else {
            const newIcecream = { flavor, quantity }
            receiveNewOrder(newIcecream)

            // clear the form
            setFlavor("")
            setQuantity(0)
        }
    }

    const receiveNewOrder = (newIcecream) => {
        // push newIcecream into the list without .push
        setIcecreamList([...icecreamList, newIcecream])
    }

    const handleDelete = (deleteArrIdx)=>{
        const filteredList = icecreamList.filter((eachIcecream, idx)=>
            idx !== deleteArrIdx
        )
        setIcecreamList(filteredList);

    }

    return (
        <div>
            <h1> Icecream Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
                    { // if-else
                        flavor.length < 3 ?
                            <p style={{ color: "red" }}> Flavor must be at least 3 characters long</p> :
                            <p></p>
                    }
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    { // if without else
                        quantity < 0 &&
                        <p style={{ color: "red" }}> Quantity must be positive</p>
                    }
                </div>
                <button type="submit" disabled={flavor.length < 3 || quantity < 0}> Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <td> Flavor</td>
                        <td> Quantity</td>
                        <td> Action </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        icecreamList.map((eachIcecream, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{eachIcecream.flavor}</td>
                                    <td>{eachIcecream.quantity}</td>
                                    <td> 
                                        <button onClick={()=>handleDelete(idx)}> Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}

export default IcecreamTruck