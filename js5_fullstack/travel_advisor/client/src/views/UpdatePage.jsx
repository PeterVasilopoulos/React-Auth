import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

// 1. get id from params (useParams)
// 2. with the id, send api call on load (axios, useEffect)


// 3. form input : useState
// 4. after submit, send request to API: axios
// 5. logic after submit: redirect: useNavigate


const UpdatePage = () => {
    // 1. get id from params (useParams)
    const {id} = useParams()

    // 5. logic after submit: redirect: useNavigate
    const navigate = useNavigate();

    // 3. form input : useState
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(8)
    const [imageUrl, setImageUrl] = useState("")
    const [season, setSeason] = useState("")

    // 2. with the id, send api call on load (axios, useEffect)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/destinations/${id}`)
            .then(response => {
                const dest = response.data;
                setLocation(dest.location);
                setRating(dest.rating);
                setImageUrl(dest.imageUrl);
                setSeason(dest.season);
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/destinations/${id}`, {location, rating, imageUrl, season})
            .then(response=>{
                console.log(response.data)
                navigate(`/destinations/${id}`)
            })
            .catch(err=>console.log(err))
    }

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/destinations/${id}`)
            .then(response=>{
                // logic after delete
                navigate(`/dashboard`)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
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
        <button onClick={handleDelete}> Delete</button>

        </div>
    )
}

export default UpdatePage