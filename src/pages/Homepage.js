import React from 'react'
import Posts from '../components/Posts'
import PostDetail from "./PostDetail"
import Profile from "./Profile"
import Header from "../components/Header"
import { BrowserRouter , Route, Routes } from "react-router-dom"

function Homepage() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Posts />} exact />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Homepage
