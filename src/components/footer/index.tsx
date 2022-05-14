import { } from 'react-bootstrap'
import * as C from './styles'

export const Footer = () => {
    return (
        <C.Container>
            <div>
                <ul>
                    <li><a href='mailto:ericklima63@gmail.com'>Contato</a></li>
                    <li><a href='https://www.github.com/ErickLimaS' target="_blank" rel='noreferrer'>GitHub</a></li>
                </ul>
            </div>
            <div>
                <span>Site para o <a href='https://erick-lima.netlify.app/' target='_blank' rel='noreferrer'>Meu Portfólio</a>. </span>
                Photo by <a href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Thought Catalog</a> on <a href="https://unsplash.com/s/photos/coffee-book?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Unsplash</a>
            </div>

        </C.Container>
    )
}
