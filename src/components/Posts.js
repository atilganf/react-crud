import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Posts() {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=10")
            .then(res => {
                console.log("posts", res.data)
                setPosts(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const handleEdit = (event, id) => {
        event.preventDefault();
        let newPost = {
            body: "newBody"
        }
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, newPost)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (event, id) => {
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h5>{post.title}</h5>
                        <Link to={`/post/${post.id}`}>Detay</Link>
                        <button onClick={(event) => handleEdit(event, post.id)}>Düzenle</button>
                        <button onClick={(event) => handleDelete(event, post.id)}>Sil</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Posts
