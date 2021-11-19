import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"

function PostDetail() {
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
        let post;
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log("PostDetail post", res.data);
                post = res.data;
            }).catch(err => {
                console.log(err)
            })

        return post;
    }

    const getUser = async (id) => {
        let user;
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log("PostDetail user", res.data);
                user = res.data;
            }).catch(err => {
                console.log(err)
            })

        return user;
    }

    return (post ?
        <div>
            <h4>Post</h4>
            {post.title}
            {post.body}
            <br/>
            <Link to={`/profile/${user.id}`}> {user.username} </Link>
        </div> : ""
    )
}

export default PostDetail
