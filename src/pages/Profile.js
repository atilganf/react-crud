import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import GoogleMapComponent from '../components/GoogleMapComponent';

function Profile() {
    const json_url = "https://jsonplaceholder.typicode.com";
    const { id } = useParams()
    const [user, setUser] = useState(false)
    const [userPosts, setUserPosts] = useState(false)

    useEffect(() => {
        async function setFunc() {
            let user = await getUser(id)
            let userPosts = await getUserPosts(id);
            setUserPosts(userPosts);
            setUser(user);
        }

        setFunc();
    }, [])

    const getUser = async (id) => {
        let user = await axios.get(`${json_url}/users/${id}`)

        return user.data;
    }

    const getUserPosts = async (id) => {
        let userPosts = await axios.get(`${json_url}/users/${id}/posts/?_limit=1`)

        return userPosts.data;
    }

    return (user ?
        <div className="px-4 py-5">
            <div className="d-flex flex-column flex-md-row mb-5 pb-4">
                <div className="user-cont w-50">
                    <h2 className="custom-dark">{user.name}</h2>
                    <span className="user-city">{user.address.city}</span>
                    <div className="d-flex mt-4">
                        <ul className="list-group user-list-1">
                            <li className="list-group-item px-0 border-0">Username</li>
                            <li className="list-group-item px-0 border-0">Email</li>
                            <li className="list-group-item px-0 border-0">Phone</li>
                            <li className="list-group-item px-0 border-0">Website</li>
                            <li className="list-group-item px-0 border-0">Company</li>
                        </ul>
                        <ul className="list-group user-list-2">
                            <li className="list-group-item px-0 border-0 fw-bold">{user.username}</li>
                            <li className="list-group-item px-0 border-0 fw-bold">{user.email}</li>
                            <li className="list-group-item px-0 border-0 fw-bold">{user.phone}</li>
                            <li className="list-group-item px-0 border-0 fw-bold">
                                <a className="text-decoration-none custom-blue" href="#">{user.website}</a>
                            </li>
                            <li className="list-group-item px-0 border-0 fw-bold">{user.company.name}</li>
                        </ul>
                    </div>
                </div>
                <div className="w-50">
                    <GoogleMapComponent />
                </div>
            </div>
            <hr />
            <div className="user-post mt-5">
                <h5>{userPosts[0].title}</h5>
                <p>{userPosts[0].body}</p>
                <a className="text-decoration-none custom-blue" href="#">Show More</a>
            </div>
        </div> : ""

    )
}

export default Profile
