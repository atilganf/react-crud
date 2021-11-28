import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"

function PostDetail() {
    const json_url = "https://jsonplaceholder.typicode.com"
    const { id } = useParams()
    const [post, setPost] = useState(false)
    const [user, setUser] = useState("")

    useEffect(() => {
        async function setStates() {
            let post = await getPost(id)
            let user = await getUser(post.userId)
            setPost(post);
            setUser(user);
        }
        setStates();
    }, [])

    const getPost = async (id) => {
        let post = await axios.get(`${json_url}/posts/${id}`)

        return post.data;
    }

    const getUser = async (id) => {
        let user = await axios.get(`${json_url}/users/${id}`)

        return user.data;
    }

    return (post ?
        <div className="p-5">
            <h2 className="text-capitalize">{post.title}</h2>
            <br />
            <Link className="link text-decoration-none fw-bold" to={`/profile/${user.id}`}>
                <h4>{user.username}</h4>
            </Link>
            <br />

            <p className="text-secondary">{post.body}</p>
            <br />
        </div> : ""
    )
}

export default PostDetail
