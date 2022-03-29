import React from "react";
import * as C from './styles'
import { Col } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <Col>
            <C.Container>
                <div className="img-title">
                    <div className="div-img" style={{
                        backgroundImage: `url(${item.imageLinks.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '128px',
                        height: '192px'
                    }}></div>
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
                    <a href={item.infoLink} target="_blank" rel="noreferrer">Saber Mais</a>
                    <a href={item.infoLink} target="_blank" rel="noreferrer">Quero esse!</a>
                </div>
                <hr />
            </C.Container>
        </Col>
    )
}