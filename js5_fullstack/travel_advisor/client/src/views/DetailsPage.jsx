import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

// 1. get id from params (useParams)
// 2. with the id, send api call on load (axios, useEffect)
// 3. store the changing variable from api (useState)

const DetailsPage = () => {
    const [dest, setDest] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/destinations/${id}`)
            .then(response => {
                setDest(response.data)
            })
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            {
                dest ?
                    <div>
                        <h1> {dest.location}</h1>
                        <h3> Rating: {dest.rating}</h3>
                        <h3> Season: {dest.season}</h3>
                        <img style={{height: "500px"}} src={dest.imageUrl} alt={dest.location} />

                    </div>:
                    <h1> Loading...</h1>
            }
        <Link to="/dashboard"> Home </Link>

        </div>
    )
}

export default DetailsPage