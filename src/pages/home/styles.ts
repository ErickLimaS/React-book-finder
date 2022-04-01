import styled from 'styled-components'
import { media } from './media'

// box-shadow: inset 0px 20px 20px 0px;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgb(33,37,41), white);
    
    div.main-search-book {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60vh;
        filter: blur(0);
        margin: 5vh;
        padding: 10vh;
        background-color: #ffffff69;
        border-radius: 10px;
        border: 1px solid #000;

        h1 {
            font-size: 80px;
            border-bottom: 3px solid #212529;
        }
    }

    .list-search-books {
        margin: 0 50px;
    }

    div.loading-div {
        height: 80px ;

    }

    ${media.lessThan('sm')`
        
    div.main-search-book {
        margin: 10%;
        padding: 10%;
    `}
    
`