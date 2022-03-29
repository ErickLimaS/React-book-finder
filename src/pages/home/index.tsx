import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchBooks from '../../components/SearchBooks';
import { FormActions, FormProvider, useForm } from '../../context/FormContext';
import './styles';

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
      storage[i] = value.data.items[i].volumeInfo;
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

  //get State Search, call a function to attach to base_url and get the book list
  async function searchBook() {
    const data = await basicFetch(state.search)
    return getInicialProps(data)
  }

  return (

    <FormProvider>
      <div className="App">
        <h1>Acha livros</h1>
        <hr />
        <form>
          <input type='text' placeholder='Ex: Harry Potter' onChange={handleSearch}></input>
          <input type="button" onClick={searchBook} value="Procurar"></input>
          <hr />
          {state.search}
        </form>
        <hr />
        {bookList.map((item, key) => (
          <SearchBooks key={key} item={item} />
        ))}
        <div>
          <hr />

        </div>
      </div>
    </FormProvider>
  );
}
