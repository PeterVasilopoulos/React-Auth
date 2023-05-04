import React from 'react'

const FormDisplay = (props) => {
    return (
        <fieldset>
            <legend> FormDisplay.jsx</legend>
            <p> Flavor: {props.flavor}</p>
            <p> Number of scoops: {props.quantity}</p>
        </fieldset>
    )
}

export default FormDisplay