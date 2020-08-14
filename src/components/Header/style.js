import styled from 'styled-components'


export const ContainerHeader = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('/images/banner.png') no-repeat;
    box-shadow: inset -10px -10px 360px 75px #000;

    h1{
        color: #fff;
        font-size: 45px;
    }
`
export const Button = styled.button`
        width: 250px;
        height: 40px;
        background: none;
        border: 1px solid #ec6433;
        border-radius: 8px;
        color: #ec6433;
        margin:0 10px;
        font-weight: bold;

        &:hover{
            background-color: #ec6433;
            color: #fff;
        }

`
export const ContentHeader = styled.div`
    width: 100%;
   
    display: flex;
    justify-content: space-between;

    img{
        width: 300px;
        height: 300px;
        margin-top: -100px;
    }

    ul{
        display: flex;
    }

    li{
        display: inline-block;
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 0 10px;

        &:hover{
            color: #ec6433;
        }
        
    }
`

export const Li = styled.button`

    border: none;
    background: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    
    ul{
        display: flex;
        position: fixed;
        padding: 0;
        flex-direction: column;
        border: 1px solid #ec6433;
        border-radius: 8px;
        margin-top: 5px;
    }

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        color: #fff;
        margin: 2px 5px;
        cursor: pointer;

        &:hover{
           
            background-color: #ec6433;
            color: #000;
        }
    }

    &:hover{
        border: none;
        color: #ec6433;
    }

`
