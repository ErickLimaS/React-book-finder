import { ChangeEvent } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from '../../context/FormContext';

export const Header = () => {
    const navigate = useNavigate();
    const { dispatch } = useForm();

    //attach value from input field to State Search
    const inputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSearch,
            payload: e.target.value
        });
    }

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
                            onChange={inputSearch}
                        />
                        <Button variant="outline-success" onClick={
                            function clickSearch() {
                                navigate('/search')
                            }
                        }>Procurar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}