import { Button } from "react-bootstrap";
import { useForm } from "../../context/FormContext";
import * as C from './styles'
import { Book, CalendarEvent, Tag } from 'react-bootstrap-icons'

export const BookPage = () => {
    const { state } = useForm();

    const imgBook = `http://books.google.com/books/content?id=${state.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

    let date = new Date(state.date)
    console.log(date)

    return (
        <C.Container>
            <div className="img-and-info">
                <div className="div-img" style={{
                    backgroundImage: `url(${imgBook})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: "300px",
                    height: '500px'
                }}>
                </div>

                <div className="all-Book-Info">
                    <div>
                        <h1>{state.title}</h1>
                        <p>Por {state.author}</p>
                    </div>
                    <hr />
                    <h2>{state.price} <small>na Google Play</small></h2>
                    <div className="buy-button">
                        <Button href={state.buyLink} target='_blank' rel='noreferrer'>Comprar Agora</Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="all-details">
                <h3><b>Descrição</b>:</h3>
                <p className="description">{state.description}</p>
                <hr />
                <div className="book-details">
                    <div>
                        <Book size={30} />
                        <p><b>Páginas</b></p>
                        <p>{state.pageCount}</p> 
                    </div>
                    <div>
                        <CalendarEvent size={30} />
                        <p><b>Data de Lançamento</b></p>
                        <p>{date.getFullYear()}</p>
                    </div>
                    <div>
                        <Tag size={30} />
                        <p><b>Categoria</b></p> 
                        <p>{state.categories}</p>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}