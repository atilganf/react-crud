import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import Swal from 'sweetalert2'


function Posts() {
    const [posts, setPosts] = useState([])
    const [show, setShow] = useState(false);
    const [editPost, setEditPost] = useState(0);

    const getPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=20")
            .then(res => {
                console.log("posts", res.data)
                setPosts(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const handleEdit = (event, id) => {
        event.preventDefault();
        handleShow(true);
        let editPost = posts.find(post => post.id == id)
        console.log(editPost);
        setEditPost(editPost);
    }

    const handleShow = (val) => {
        setShow(val);
    }

    const handleDelete = (event, id) => {
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                let newPosts = posts;
                newPosts = newPosts.filter(post => post.id != id);
                console.log(newPosts);
                setPosts(newPosts);
                Swal.fire({
                    icon: "success",
                    text: "Silme işlemi başarılı",
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
                console.log("handle delete respond", res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const changePost = (newPost, id) => {
        let newPosts = posts;
        let index = newPosts.findIndex(post => post.id == id)
        newPosts[index].title = newPost.title;
        newPosts[index].body = newPost.body;
        setPosts(newPosts);
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <>
            <ModalForm show={show} handleShow={handleShow} post={editPost} passNewPost={changePost} />
            <div className="row">
                <div className="card border-0">
                    <ul className="list-group list-group-flush">
                        {posts.map((post, index) => {
                            if (index < 10) {
                                return (
                                    <li key={post.id} className="list-group-item post-cont d-flex flex-column flex-md-row justify-content-between py-4 px-0 mx-4 m-0">
                                        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center text-secondary">
                                            <b className="ps-1 ps-lg-0">{post.id}</b>
                                            <p className="ps-1 ps-lg-3 py-0 my-0">{post.title}</p>
                                        </div>
                                        <div className="fw-normal d-flex mt-4 mt-xl-0 flex-column flex-lg-row justify-content-between">
                                            <Link className="btn btn-primary w-100 py-2 px-4 shadow border-0" to={`/post/${post.id}`}>DETAY</Link>
                                            <button onClick={(event) => handleEdit(event, post.id)} className="btn btn-success w-100 ms-lg-3 mt-3 mt-lg-0 py-2 px-4 shadow border-0" >DÜZENLE</button>
                                            <button className="btn btn-danger w-100 ms-lg-3 mt-3 mt-lg-0 py-2 px-4 shadow border-0" onClick={(event) => handleDelete(event, post.id)}>SİL</button>
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Posts
