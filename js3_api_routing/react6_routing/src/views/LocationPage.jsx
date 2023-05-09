import React from 'react'
import { useParams } from "react-router-dom";

const LocationPage = () => {
    const { city } = useParams();


    return (
        <fieldset>
            <legend>LocationPage component</legend>
            <h1> You are visiting {city} </h1>
        </fieldset>
    )
}

export default LocationPage