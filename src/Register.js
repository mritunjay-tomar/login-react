import React, { useState } from 'react';
import "./Register.css"

function Register() {

    const [state, setState] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    })

    const onChangeHandler = (e) => {
        let name = e.target.name;
        setState( (state) => {
            if (name === "name") {
                return {
                    name: e.target.value,
                    email: state.email,
                    username: state.username,
                    password: state.password,
                }
            } else if (name === "email") {
                return {
                    name: state.name,
                    email: e.target.value,
                    username: state.username,
                    password: state.password,
                }
            } else if (name === "username") {
                return {
                    name: state.name,
                    email: state.email,
                    username: e.target.value,
                    password: state.password,
                }
            } else if (name === "password") {
                return {
                    name: state.name,
                    email: state.email,
                    username: state.username,
                    password: e.target.value,
                }
            } else {
                return state;
            }
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/createUser", {
            method: 'POST',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(state),
        }).then((response) => {
            setState(() => {
                return {
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                }
            })
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <>
            <div className="register-form">
                    <form onSubmit={onSubmitHandler} >
                        <div className="Elememt">
                            <label htmlFor="name">Name</label>
                            <input autoComplete="false" id="name" name="name" type="text" value={state.name} onChange = {onChangeHandler} />
                        </div>
                        <div className="Elememt">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email" type="email" value={state.email} onChange = {onChangeHandler} />
                        </div>
                        <div className="Elememt">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text" value={state.username} onChange = {onChangeHandler} />
                        </div>
                        <div className="Elememt">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" value={state.password} onChange = {onChangeHandler} />
                        </div>
                        <br/>
                        <input type="submit" className="btn-primary" />
                    </form>
                </div>
        </>
    )
}

export default Register;