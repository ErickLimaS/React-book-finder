import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0px 0px 9px 3px #38383873;

    div.img-title{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(207, 207, 207);

        .div-img {
            margin: 10px;
        }
        .div-title {
            width: 50%;
            margin: 0 20px;

            .author-name span{
                font-weight: 600;
            }
        }
    }

    .div-buttons *{
        margin: 0 20px;
        border-radius: 4px;
        padding: 10px;
    }

    .button-know {
        color: black;
        border: 1px solid black;
        background-color: transparent;
    }

    .button-know:hover{
        
        background-color: #cfcfcf;
    }

    .button-want {
        color: black;
        border: 1px solid black;
        background-color: #00ff2b8f;
    }
    
    .button-want:hover{
        color: white;
        border: 1px solid rgb(0 165 28);
        background-color: #00e126;
    }
    
    h2 {
        margin: 10px 5px;
        font-size: 26px;
    }

    .book-details {
        margin: 20px;
        align-self: flex-start;

        span {
            font-weight: 600;
        }
    }

`

export const Img = styled.div < { item: any }> `

    background-image: url(${props => props.item.volumeInfo.imageLinks !== undefined ? props.item.volumeInfo.imageLinks.thumbnail : 'https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png'});
`