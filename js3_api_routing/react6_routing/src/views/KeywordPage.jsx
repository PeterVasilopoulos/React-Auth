import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const KeywordPage = () => {
    const {food, color} = useParams();
    const navigate = useNavigate();

    return (
        <fieldset>
            <legend>KeywordPage component</legend>
            <h1 style={{backgroundColor: color}}> You searched for {food}</h1>
            <button onClick={()=>navigate(-1)}> Go back</button>
            <button onClick={()=>navigate(-2)}> Go back 2 pages</button>
        </fieldset>
    )
}

export default KeywordPage