import React from "react";
import * as C from './styles'
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../context/FormContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    return (

        <Col>
            <C.Container>
                <div className="img-title">
                    <div className="div-img" style={{
                        backgroundImage: `url(${item.volumeInfo.imageLinks.thumbnail})`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '148px',
                        height: '192px'
                    }}>
                    </div>
                    <div className="div-title">
                        <h2>{item.title}</h2>
                        {/* <p className="book-details">Descricao: {item.description} Ler Mais...</p> */}
                        <p className="">Author: {item.volumeInfo.authors}</p>
                    </div>
                </div>
                <p className="book-details">Descricao: Ler Mais...</p>
                <p className="book-details">{item.volumeInfo.pageCount} Páginas</p>
                <p className="book-details">Lancamento: {item.volumeInfo.publishedDate}</p>
                {/* <p className="book-details">Editora: {item.publisher}</p> */}
                {/* <p className="book-details">Categoria: {item.categories}</p> */}
                <div className="div-buttons">
                    {/* takes state SEARCH and ISBN data to the next page*/}
                    <Button variant='primary' className="button-know" onClick={
                        function handleNextPage() {
                            dispatch({
                                type: FormActions.setIsbn,
                                payload: item.volumeInfo.industryIdentifiers[0].identifier
                            });
                            dispatch({
                                type: FormActions.setTitle,
                                payload: item.volumeInfo.title
                            });
                            dispatch({
                                type: FormActions.setDescription,
                                payload: item.volumeInfo.description
                            });
                            dispatch({
                                type: FormActions.setPublisher,
                                payload: item.volumeInfo.publisher
                            });
                            dispatch({
                                type: FormActions.setPrice,
                                payload: `R$ ${item.saleInfo.listPrice.amount}`
                            });
                            dispatch({
                                type: FormActions.setDate,
                                payload: item.volumeInfo.publishedDate
                            });
                            dispatch({
                                type: FormActions.setCategories,
                                payload: item.volumeInfo.categories
                            });
                            dispatch({
                                type: FormActions.setPageCount,
                                payload: item.volumeInfo.pageCount
                            });
                            dispatch({
                                type: FormActions.setBuyLink,
                                payload: item.saleInfo.buyLink
                            });
                            dispatch({
                                type: FormActions.setId,
                                payload: item.id
                            });
                            dispatch({
                                type: FormActions.setAuthor,
                                payload: item.volumeInfo.authors
                            });
                            console.log(state.isbn)
                            navigate('/book')
                        }
                    }>
                        Saber Mais
                    </Button>
                    <Button href={item.infoLink} target="_blank" variant='secondary' className="button-want">Quero esse!</Button>
                </div>
                <hr />
            </C.Container>
        </Col >
    )
}