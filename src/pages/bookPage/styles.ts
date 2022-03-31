import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    .img-and-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: #e3e3e3ba;
    }

    .div-img{
        align-items: initial;
    }


    hr {
        margin: 0;
    }

    .all-Book-Info {
        display: flex;
        flex-direction: column;
        width: 700px;

        * {
            margin: 20px 0 10px 0;
        }

        div p span {
            font-weight: 600;
        }

        .buy-button{
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                border-radius: 20px;
                width: 300px;
            }
        }

    }

    .all-details {
        margin: 20px 10vh;

        p.description {
            margin: 20px 10px;
        }

            .book-details{
                display: flex;
                flex-direction: row;

                div {    
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px;

                    p {
                        margin: 5px;
                    }
                }
            }
        }
    }
}
`
export const Price = styled.h2<{ price: any }>`

    font-size: 32px;

    small {
        display: ${props => props.price === 'Preço Indisponível' ? 'none' : 'initial'}
    }

`