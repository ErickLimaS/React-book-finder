import axios from 'axios';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import SearchBooks from '../../components/listBookSearched/SearchBooks';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles'

export const Search = () => {
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
        let storage: any = value.data.items
        // console.log(storage)
        setBookList(storage)
        setLoading(false)
        return;
    }
    async function searchBook() {
        //botar ERRO se Search tiver vazio 
        const data = await basicFetch(state.search)
        dispatch({
            type: FormActions.setSearch,
            payload: ''
        })
        return getInicialProps(data)
    }

    //run search functions to THIS page
    if (state.search !== '') {
        searchBook()
    }

    const mapBookList = bookList.map((item, key) => (
        <SearchBooks key={key} item={item} />
    ))

    return (
        <>
            <Header />
            <C.Container>
                <Row className='list-search-books'>
                    {loading !== true ? mapBookList
                        :
                        <Spinner animation="border" role="status" variant='light'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                </Row>
            </C.Container>
            {/* aplies footer when theres data to show */}
            {loading !== true ? <Footer /> : ''}
        </>
    );
}
