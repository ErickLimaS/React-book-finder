import React from "react";
import * as C from './styles'
import { Button, Col } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <Col>
            <C.Container>
                <div className="img-title">
                    <div className="div-img" style={{
                        backgroundImage: `url(${item.imageLinks.thumbnail})`,
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
                        <p className="">Author: {item.authors}</p>
                    </div>
                </div>
                <p className="book-details">Descricao: Ler Mais...</p>
                <p className="book-details">{item.pageCount} Páginas</p>
                <p className="book-details">Lancamento: {item.publishedDate}</p>
                {/* <p className="book-details">Editora: {item.publisher}</p> */}
                {/* <p className="book-details">Categoria: {item.categories}</p> */}
                <div className="div-buttons">
                    <Button href='/book' rel="noreferrer" variant='primary' className="button-know">Saber Mais</Button>
                    <Button href={item.infoLink} target="_blank" variant='secondary' className="button-want">Quero esse!</Button>
                </div>
                <hr />
            </C.Container>
        </Col >
    )
}