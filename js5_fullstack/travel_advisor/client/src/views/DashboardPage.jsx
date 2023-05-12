import React, { useState, useEffect } from 'react'
import axios from "axios"
// get data from api on load : useEffect, axios
// variable change: useState
const DashboardPage = () => {
    const [destList, setDestList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/destinations`)
            .then(response=>{
                console.log(response.data);
                setDestList(response.data);
            })
            .catch(err=>console.log(err))
    }, [])


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
                    destList.map((eachDest, idx)=>(
                        <tr key={idx}>
                            <td>{eachDest.location}</td>
                            <td>{eachDest.rating}</td>
                            <td>{eachDest.season}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
        


        </div>
    )
}

export default DashboardPage