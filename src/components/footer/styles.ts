import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgb(33,37,41);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #cfcfcf;
    height: 80px;
    padding: 10px;

    a {
        color: white;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        
        li {
            margin: 0 20px;
        }
    }
    

`