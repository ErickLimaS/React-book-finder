import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import SearchBooks from '../../components/listBookSearched/SearchBooks';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles'
import background from '../../img/bg-img.jpg'
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import Swal from 'sweetalert2';
import { keyboardKey } from '@testing-library/user-event';

export const Home = () => {

    const { state, dispatch } = useForm();
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_BASE = 'https://www.googleapis.com/books/v1/volumes?q='

    //attach url with the book name
    async function basicFetch(value: any) {
        const response = await axios.get(`${API_BASE}${value}`)
        return response
    }

    //get the books with correspondent url 

    function getInicialProps(value: any) {
        // console.log(value)
        // const aux = value.data.items.length
        let storage: any = value.data.items
        // console.log(value.data.items)
        setBookList(storage)
        setLoading(false)
        return;
    }

    //attach value from input field to State Search
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSearch,
            payload: e.target.value
        })
    }

    //get State Search and call a function to attach it to base_url and get the book list
    async function searchBook() {
        if (state.search === '') {
            Swal.fire(
                'Pesquisar o quê?',
                'Escreva o livro que quer pesquisar!',
                'question'
            )
        }
        const data = await basicFetch(state.search)
        return getInicialProps(data)
    }

    const mapBookList = bookList.map((item, key) => (
        <SearchBooks key={key} item={item} />))
        ;

    return (
        <>
            <Header />
            <C.Container style={
                {
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }
            }>
                <div className='main-search-book'>
                    <h1>Book Finder</h1>
                    <hr />

                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                onChange={handleSearch}
                                className="mb-2"
                                id="inlineFormInputBookName"
                                placeholder="Ex: Sherlock Holmes"
                                onKeyUp={
                                    function keyCode(e: keyboardKey) {
                                        if (e.keyCode === 13) {
                                            searchBook()
                                        }
                                    }
                                }
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="button" className="mb-2" onClick={searchBook}>
                                Procurar
                            </Button>
                        </Col>
                    </Row>

                </div>
                <div className='loading-div' id='books'>
                    {state.search !== '' ?
                        (loading === true ?
                            <Spinner animation="border" role="status" variant='light'>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            <h2>Resultados para <span>{state.search}</span></h2>
                        )
                        :
                        ''
                    }
                </div>
            </C.Container>

            <C.Container>
                <Row className='list-search-books'>
                    {loading === false ?
                        (mapBookList)
                        :
                        ''
                    }
                </Row>
            </C.Container>

            <Footer />
        </>
    );
}
