import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";

export default function Header() {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand>Vchat</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link onClick={toggle}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={toggle}>Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Modal show={modal} onHide={toggle} className="loginModal">
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlfor="username">UserName</Form.Label>
                            <Form.Control type="text" id="username" name="username"
                                          placeholder="Enter Your UserName or Email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlfor="password">Password</Form.Label>
                            <Form.Control type="password" id="password" name="password"
                                          placeholder="Enter Your Password"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button value="submit" variant="success" className="mr-2 col-3" onClick={toggle}>Login</Button>
                    <Button type="cancel" variant="danger" onClick={toggle}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            <Jumbotron fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
