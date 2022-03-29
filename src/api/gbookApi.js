import axios from "axios"

const getInicialProps = async () => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    return console.log(response)
}
export default getInicialProps;