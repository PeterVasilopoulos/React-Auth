import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// 1. form input : useState
// 2. after submit, send request to API: axios
// 3. logic after submit: redirect: useNavigate


const CreateForm = () => {
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(8)
    const [imageUrl, setImageUrl] = useState("")
    const [season, setSeason] = useState("")

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        // send the formData to api
        axios.post(`http://localhost:8000/api/destinations`, {location: location, rating, imageUrl, season})
            .then(response=>{
                console.log(response.data)
                navigate(`/dashboard`) // logic after successful create
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Location </label>
                <input type="text" name="location" value={location}
                    onChange={e=>setLocation(e.target.value)} />
            </div>
            <div>
                <label> Rating </label>
                <input type="number" name="rating" value={rating}
                    onChange={e=>setRating(e.target.value)} />
            </div>
            <div>
                <label> Image URL </label>
                <input type="text" name="imageUrl" value={imageUrl}
                    onChange={e=>setImageUrl(e.target.value)} />
            </div>
            <div>
                <lable> Season</lable>
                <select name="season" value={season} onChange={e=>setSeason(e.target.value)}>
                    <option hidden> Please select a season</option>
                    <option value="spring"> Spring</option>
                    <option value="summer"> Summer</option>
                    <option value="fall"> Fall</option>
                    <option value="winter"> Winter</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateForm