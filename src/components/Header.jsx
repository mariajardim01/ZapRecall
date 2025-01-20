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
    }

    h1{
        font-family: "Righteous", serif;
        font-size: 36px ;
        color: white;
    }
`