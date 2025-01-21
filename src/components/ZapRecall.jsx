import styled from "styled-components"
import Header from "./Header"
import QuestionsList from "./QuestionsList"
import Bottom from "./Bottom"
import Result from "./Result"
import { useState } from "react"
import AddQuestion from "./AddQuestion"


export default function ZapRecall({}){
    const [QUESTIONS, setQuestions ]= useState([
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ])
    
    const [rigth,setRigth] = useState( [])
    const [almostRigth,setAlmostRigth] = useState([])
    const [wrong,setWrong] = useState([])


    return(
        <Container>
            
            <Header></Header>
            <AddQuestion QUESTIONS={QUESTIONS} setQuestions={setQuestions}></AddQuestion>
            <QuestionsList QUESTIONS={QUESTIONS} rigth={rigth} setRigth={setRigth} almostRigth={almostRigth} setAlmostRigth={setAlmostRigth} wrong={wrong} setWrong={setWrong}></QuestionsList>
            <Bottom questions={QUESTIONS} rigth={rigth} almostRigth={almostRigth} wrong={wrong} ></Bottom>
            <Result questions={QUESTIONS} rigth={rigth} almostRigth={almostRigth} wrong={wrong}></Result>
            
        </Container>
        
        
    )
}

const Container = styled.div`
    background-color: #fb6b6b;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-bottom: 10vh;
    
    


`
