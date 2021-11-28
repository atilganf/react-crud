import React from 'react'
import Posts from './Posts'
import PostDetail from "./PostDetail"
import Profile from "./Profile"
import Header from "../components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from '../components/Footer'

function Homepage() {
    return (
        <div className="w-75 m-auto">
            <BrowserRouter>
                <Header />
                <div className="container bg-white rounded shadow-lg main-container p-0">
                    <Routes>
                        <Route path="/" element={<Posts />} exact />
                        <Route path="/post/:id" element={<PostDetail />} />
                        <Route path="/profile/:id" element={<Profile />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Homepage
