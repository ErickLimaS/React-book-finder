import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        }
    }
    `