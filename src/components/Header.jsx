import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Header (){
    return(
        <>
        <HeaderCss>
        <img src={logo}></img>
        <h1>ZapRecall</h1>
        </HeaderCss>
        </>

    )
}

const HeaderCss = styled.div`
    display: flex;
    height: 10vh;
    width: 100vw;
    align-items: center;
    justify-content: center;

     img{
        height: 80%;
        min-height: 36px;
    }

    h1{
        font-family: "Righteous", serif;
        font-size: 36px ;
        color: white;
    }

    @media(min-width: 900px){
        h1{
            font-size: 45px;
        }
     
    }
    @media(max-height: 800px){
        h1{
            font-size: calc(2em + 0.9vh);
        }
     
    }
`