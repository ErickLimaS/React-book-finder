import React from "react";
import * as C from './styles'
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormActions, useForm } from "../../context/FormContext";

type Props = {
    item: any,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }: Props) => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    //string language to upper case
    const language = item.volumeInfo.language.toUpperCase()

    //shows year of publishing
    let date = new Date(item.volumeInfo.publishedDate)

    return (

        <Col className="col-md-4">
            <C.Container>
                <div className="img-title">
                    <C.Img item={item} className="div-img" style={{
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '148px',
                        height: '192px'
                    }} />
                    <div className="div-title">
                        <h2>{item.volumeInfo.title}</h2>
                        <p className="author-name">Por <span>{item.volumeInfo.authors}</span></p>
                    </div>
                </div>
                <div className="book-details">
                    <p><span>Ano de Lançamento:</span> {date.getFullYear()}</p>
                    <p><span>Editora:</span> {item.volumeInfo.publisher}</p>
                    <p><span>Categoria:</span> {item.volumeInfo.categories}</p>
                    <p><span>Idioma:</span> {language}</p>
                </div>
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
                            if (item.saleInfo.listPrice !== undefined) {
                                dispatch({
                                    type: FormActions.setPrice,
                                    payload: `R$ ${item.saleInfo.listPrice.amount}`
                                });
                            }
                            else {
                                dispatch({
                                    type: FormActions.setPrice,
                                    payload: 'Preço Indisponível'
                                })
                            };
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
                            dispatch({
                                type: FormActions.setLanguage,
                                payload: item.volumeInfo.language
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