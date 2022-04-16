import { Button } from "react-bootstrap";
import { useForm } from "../../context/FormContext";
import * as C from './styles'
import { Book, CalendarEvent, Tag, Type } from 'react-bootstrap-icons'
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

type Props = {
    price: any;
}

export const BookPage = ({ price }: Props) => {
    const { state } = useForm();

    let priceFormated: any;
    if (state.price !== 'Preço Indisponível') {
        const fixedPrice = Number(state.price.split(' ')[1]).toFixed(2)
        priceFormated = `R$ ${fixedPrice.replace(".", ",")}`;
    }
    else {
        priceFormated = state.price
    }
    // console.log(state.price)

    const imgBook = `http://books.google.com/books/content?id=${state.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

    let date = new Date(state.date)

    const language = (state.language).toUpperCase()

    return (
        <>
            <Header />
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
                            <p>Por <span>{state.author}</span></p>
                        </div>
                        <hr />
                        <C.Price price={priceFormated}>{priceFormated} <small>na Google Play</small></C.Price>
                        <C.DivButton price={priceFormated} className="buy-button">
                            <Button href={state.buyLink} target='_blank' rel='noreferrer'>Comprar Agora</Button>
                        </C.DivButton>
                    </div>
                </div>
                <hr />
                <div className="all-details">
                    <h3><b>Descrição</b></h3>
                    <p className="description">{state.description}</p>
                    <C.Description description={state.description} className="empty-description">
                        Descrição Não Disponível.
                    </C.Description>
                    <hr />
                    <div className="book-details">
                        <div>
                            <Book size={30} />
                            <p><b>Páginas</b></p>
                            <p>{state.pageCount}</p>
                        </div>
                        <div>
                            <CalendarEvent size={30} />
                            <p><b>Lançamento</b></p>
                            <p>{date.getFullYear()}</p>
                        </div>
                        <div>
                            <Tag size={30} />
                            <p><b>Categoria</b></p>
                            <p>{state.categories}</p>
                        </div>
                        <div>
                            <Type size={30} />
                            <p><b>Idioma</b></p>
                            <p>{language}</p>
                        </div>
                    </div>
                </div>
            </C.Container>
            <Footer />
        </>
    )
}
