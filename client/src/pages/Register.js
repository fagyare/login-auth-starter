import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
    }

    return ( 
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <br />
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Register;