import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo@2x.png"
import background from "../assets/images/bg@2x.png"

function Header() {
    return (
        <>
            <nav className="navbar navbar-light transparent mt-5">
                <div className="container custom-container p-0">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" height="40" />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-light" to="/">Posts</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="btn btn-light custom-blue py-2 px-4 shadow" href="#">Login</a>
                    </div>
                </div>
            </nav>
            <div className="background-cont">
                <img className="custom-bg" src={background}></img>
            </div>
        </>
    )
}

export default Header
