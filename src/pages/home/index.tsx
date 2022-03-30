import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import SearchBooks from '../../components/listBookSearched/SearchBooks';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles'
import background from '../../img/bg-img.jpg'


export const Home = () => {

    const { state, dispatch } = useForm();
    const [bookList, setBookList] = useState([]);

    const API_BASE = 'https://www.googleapis.com/books/v1/volumes?q='

    //attach url with the book name
    async function basicFetch(value: any) {
        const response = await axios.get(`${API_BASE}${value}`)
        return response
    }

    //get the books with correspondent url 

    /*  GET AUTHOR, Published Date, Picture, etc*/
    function getInicialProps(value: any) {
        console.log(value)
        const aux = value.data.items.length
        let storage: any = [aux]
        console.log(aux + '- length')
        let i = 0;
        while (i < aux) {
            storage[i] = value.data.items[i]; //book details
            console.log(storage);
            i++;
            console.log(i);
        }
        setBookList(storage)
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
        //botar ERRO se Search tiver vazio 
        const data = await basicFetch(state.search)
        return getInicialProps(data)
    }

    return (
        <>
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
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputBookName" visuallyHidden>
                                    Book Name
                                </Form.Label>
                                <Form.Control
                                    onChange={handleSearch}
                                    className="mb-2"
                                    id="inlineFormInputBookName"
                                    placeholder="Ex: Harry Potter"

                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="button" className="mb-2" onClick={searchBook}>
                                    Procurar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

            </C.Container>

            <C.Container>
                <Row className='list-search-books'>
                    {bookList.map((item, key) => (
                        <SearchBooks key={key} item={item} />
                    ))}
                </Row>
            </C.Container>
        </>
    );
}
