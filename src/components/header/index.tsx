import { keyboardKey } from '@testing-library/user-event';
import { ChangeEvent } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
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
                        <Nav.Link href="#">Como Funciona</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Procurar..."
                            className="me-2"
                            aria-label="Procurar..."
                            onChange={inputSearch}
                            onKeyUp={
                                function keyCode(e: keyboardKey) {
                                    if (e.keyCode === 13) {
                                        if (state.search !== '') {
                                            navigate('/search')
                                        }
                                        else {
                                            Swal.fire(
                                                'Pesquisar o quê?',
                                                'Escreva o livro que quer pesquisar!','question'
                                            )
                                        }
                                    }
                                }
                            }
                        />
                        <Button variant="outline-success"

                            onClick={
                                function clickSearch() {
                                    if (state.search === '') {
                                        Swal.fire(
                                            'Pesquisar o quê?',
                                            'Escreva o livro que quer pesquisar!',
                                            'question'
                                        )
                                    }
                                    else {
                                        navigate('/search')
                                    }
                                }
                            }>Procurar</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}