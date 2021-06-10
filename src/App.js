import "./app.css"

import React from 'react'
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";

import Register from "./Register"
import Login from "./Login"

export default function App() {
    return (
        <BrowserRouter>
            <div className="container main-div">
                <div className="app-main">
                    <div className="login">
                        <NavLink exact to="/"><h5>LOGIN</h5></NavLink>
                    </div>
                    <div className="register">
                    <NavLink to="/register"><h5>REGISTER</h5></NavLink>
                    </div>
                </div>
                <div className="component">
                    <Switch>
                        <Route exact path="/"><Login /></Route>
                        <Route path="/register"><Register/></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
