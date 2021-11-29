import React, { useState } from 'react'
import { Modal, Form } from "react-bootstrap"
import axios from 'axios';
import Swal from 'sweetalert2';

function ModalForm(props) {
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

    const handleTitle = (e) => {
        console.log("title", e.target.value)
        setTitle(e.target.value)
    }

    const handleBody = (e) => {
        console.log("body", e.target.value)
        setBody(e.target.value)
    }

    const handleClose = () => {
        props.handleShow(false)
        setTitle(null)
        setBody(null)
    };

    const handleEdit = () => {
        let newPost = {
            body: body ?? props.post.body,
            title: title ?? props.post.title
        }
        axios.put(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, newPost)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    text: "Güncelleme işlemi başarılı",
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                })
                handleClose();
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
        props.passNewPost(newPost, props.post.id)
    }

    return (
        <>
            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-5">Düzenle</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="custom-dark">Title</Form.Label>
                            <Form.Control onChange={handleTitle} value={title ?? props.post.title} type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="custom-dark">Body</Form.Label>
                            <Form.Control onChange={handleBody} value={body ?? props.post.body} as="textarea" rows={4} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="justify-content-start">
                    <button className="btn btn-modal shadow px-3 py-2" onClick={handleEdit}>GÜNCELLE</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm
