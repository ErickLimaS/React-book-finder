import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <div>
            <div>
                <div style={{
                    backgroundImage: `url(${item.imageLinks.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '200px',
                    height: '200px'
                }}></div>
                <h2>{item.title}</h2>
                <h3>Descricao: {item.description}</h3>
                <p>Author: {item.authors}</p>
                <p>{item.pageCount} Páginas</p>
                <p>Lancamento: {item.publishedDate}</p>
                <p>Editora: {item.publisher}</p>
                <p>Categoria: {item.categories}</p>
                <a href={item.infoLink} target="_blank" rel="noreferrer">Quero esse!</a>
                <hr />
            </div>
        </div>
    )
}