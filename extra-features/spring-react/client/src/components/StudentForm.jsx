import React, { useState } from 'react'
import axios from 'axios';
import studentService from '../services/StudentService';

const StudentForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // no service
    const handleSubmit2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/students",
            { name, email },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                props.onCreate()
            })
            .catch(err => console.log(err))
    }

    // refactored axios config so that the header doesn't need to be repeated in every axios call
    const handleSubmit = (e) => {
        e.preventDefault();
        studentService.createStudent({ name, email })
            .then(res => {
                props.onCreate()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> Create</h1>
            <form onSubmit={handleSubmit2}>
                <div>
                    <p> Name</p>
                    <input onChange={e => setName(e.target.value)} className="form-control" />
                </div>
                <div>
                    <p> Email</p>
                    <input onChange={e => setEmail(e.target.value)} className="form-control" />
                </div>
                <button className='btn btn-success'> Submit</button>
            </form>



        </div>
    )
}

export default StudentForm