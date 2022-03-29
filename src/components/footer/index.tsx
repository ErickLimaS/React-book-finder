import React from 'react'
import { } from 'react-bootstrap'
import * as C from './styles'

export const Footer = () => {
    return (
        <C.Container>
            <ul>
                <li><a href='mailto:ericklima63@gmail.com'>Email</a></li>
                <li><a href='https://www.github.com/ErickLimaS'>GitHub</a></li>
            </ul>
            Photo by <a href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thought Catalog</a> on <a href="https://unsplash.com/s/photos/coffee-book?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

        </C.Container>
    )
}