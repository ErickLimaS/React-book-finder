import styled from 'styled-components'

export const Container = styled.div`
    width: 350px;
    background-color: #ffff;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0px 0px 9px 3px;

    div.img-title{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .div-img {
            margin: 10px;
        }
        .div-title {
            margin: 0 20px; 
        }
    }

    .div-buttons *{
        margin: 0 20px;
        background-color: #000;
        border-radius: 4px;
        padding: 10px;
    }
    
    h2 {
        margin: 10px 5px;
        font-size: 26px;
    }

    p.book-details {
        border-bottom: 1px solid black;
    }



`