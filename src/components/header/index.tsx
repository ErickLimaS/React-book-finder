import { ChangeEvent } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import state from 'sweetalert/typings/modules/state';
import Swal from 'sweetalert2';
import { FormActions, useForm } from '../../context/FormContext';

export const Header = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

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
                                if (state.search === '') {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Pesquisar o quê?',
                                        text: 'Escreva o livro que quer pesquisar!'
                                    })
                                }
                                else {
                                    navigate('/search')
                                }
                            }
                        }>Procurar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}