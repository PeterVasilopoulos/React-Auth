import React, { useState } from 'react'

const CompleteForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [chocoChip, setChocoChip] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newIcecream = {flavor, quantity, chocoChip, isUrgent: false}
        props.onCreate(newIcecream);

    }

    return (
        <div>
            <h3> Icecream Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <select name="flavor" value={flavor} 
                        onChange={(e)=>setFlavor(e.target.value)}>
                        <option hidden> Please choose a flavor</option>
                        <option value="mint"> Mint </option>
                        <option value="strawberry"> Strawberry</option>
                        <option value="jasmine"> Jasmine</option>
                    </select>
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div>
                    <label> Chocolate chip?</label>
                    <input type="checkbox" name="chocoChip" checked={chocoChip}
                        onChange={(e)=>setChocoChip(e.target.checked)} />
                </div>
                <button type='submit'> Submit</button>
            </form>

        </div>
    )
}

export default CompleteForm