import axios from 'axios';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import SearchBooks from '../../components/listBookSearched/SearchBooks';
import { FormActions, useForm } from '../../context/FormContext';
import * as C from './styles'

export const Search = () => {
    const { state, dispatch } = useForm();
    const [bookList, setBookList] = useState([]);

    const API_BASE = 'https://www.googleapis.com/books/v1/volumes?q='

    //attach url with the book name
    async function basicFetch(value: any) {
        const response = await axios.get(`${API_BASE}${value}`)
        return response
    }

    //get the books with correspondent url 

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


    return (
        <>
            <Header />
            <C.Container>
                <Row className='list-search-books'>
                    {bookList.map((item, key) => (
                        <SearchBooks key={key} item={item} />
                    ))}
                </Row>
            </C.Container>
            <Footer />
        </>
    );
}
