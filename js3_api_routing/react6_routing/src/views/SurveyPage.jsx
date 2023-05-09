import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SurveyPage = () => {
    const [food, setFood] = useState("")
    const [color, setColor] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${food}/${color}`);
        // navigate("/search/" + food + "/"+ color);
    }

    return (
        <fieldset>
            <legend>SurveyPage component</legend>
            <form onSubmit={handleSubmit}>
                <label>Fav Food:</label>
                <input type="text" onChange={(e) => setFood(e.target.value)} value={food} />
                <label>Fav Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                <input type="submit" value="Submit Survey" />
            </form>
        </fieldset>
    )
}

export default SurveyPage