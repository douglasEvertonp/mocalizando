import styled from 'styled-components'

export const Containner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 150px;
    height: 150px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    
    img{
        width: 150px;
        height: 150px;
        box-shadow: inset -10px -10px 360px 75px #000;
        border-radius: 5px; 

    }
`