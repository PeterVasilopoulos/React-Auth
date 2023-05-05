import React, {useState} from 'react'

const IcecreamForm = (props) => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIcecream = { flavor, quantity }
        props.onCreate(newIcecream);

        // clear the form
        setFlavor("")
        setQuantity(0)
    }

    return (
        <div>
            <h1> Icecream Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Icecream flavor: </label>
                    <input type="text" name="flavor" value={flavor}
                        onChange={(e) => setFlavor(e.target.value)} />
                </div>
                <div>
                    <label> Number of scoops: </label>
                    <input type="number" name="quantity" value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button type="submit"> Submit</button>
            </form>

        </div>
    )
}

export default IcecreamForm