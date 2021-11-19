import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Profile() {
    const { id } = useParams()
    const [user, setUser] = useState(false)

    useEffect(() => {
        async function setInitial() {
            let user = await getUser(id)
            setUser(user);
        }

        setInitial();
    }, [])

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
    /*
    USER:
        address
            city
            geo
                lat
                lng
            street
            suite
            zipcode
        company
            bs
            catchPrase
            name
        email
        id
        name
        phone
        username
        website
    */


    return (user ?
        <div>
            <h4>Profile</h4>
            {JSON.stringify(user)}
        </div> : ""
    )
}

export default Profile
