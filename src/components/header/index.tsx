import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Book Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="#deets">Como Funciona</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Procurar..."
                            className="me-2"
                            aria-label="Procurar..."
                        />
                        <Button variant="outline-success" >Procurar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}