import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

// get data from api on load : useEffect, axios
// variable change: useState
const DashboardPage = () => {
    const [destList, setDestList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/destinations`)
            .then(response => {
                console.log(response.data);
                setDestList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    //handleDelete
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/destinations/${deleteId}`)
            .then(response => {
                // logic after delete
                removeFromDom(deleteId)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = (deleteId) =>{
        const filteredList = destList.filter((eachDest)=>
            eachDest._id !== deleteId) 
        setDestList(filteredList)
    }

    return (
        <div>

            <h3> Destination Board</h3>

            <table>
                <thead>
                    <tr>
                        <th> Location </th>
                        <th> Rating </th>
                        <th> Season </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        destList.map((eachDest, idx) => (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/destinations/${eachDest._id}`}>
                                        {eachDest.location}</Link>
                                </td>
                                <td>{eachDest.rating}</td>
                                <td>{eachDest.season}</td>
                                <td>
                                    <Link to={`/destinations/${eachDest._id}/edit`}> Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(eachDest._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </div>
    )
}

export default DashboardPage



// client
// npx create-react-app client : created client folder (already included package.json, node_modules)
// inside client : npm i axios react-router-dom


// create server folder
// inside server folder : npm init -y (to get package.json)
// inside server folder : npm i express dotenv mongoose cors
// inside server folder : nodemon server.js