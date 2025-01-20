import styled from "styled-components"
import Header from "./Header"
import QuestionsList from "./QuestionsList"
import Bottom from "./Bottom"
import { useState } from "react"

export default function ZapRecall({QUESTIONS}){
    
    const [rigth,setRigth] = useState( [])
    const [almostRigth,setAlmostRigth] = useState([])
    const [wrong,setWrong] = useState([])


    return(
        <Container>
            <Header></Header>
            <QuestionsList QUESTIONS={QUESTIONS} rigth={rigth} setRigth={setRigth} almostRigth={almostRigth} setAlmostRigth={setAlmostRigth} wrong={wrong} setWrong={setWrong}></QuestionsList>
            <Bottom questions={QUESTIONS} rigth={rigth} almostRigth={almostRigth} wrong={wrong} ></Bottom>

            
        </Container>
        
        
    )
}

const Container = styled.div`
    background-color: #fb6b6b;
    width: 100vw;
    height: 100%;
    
    width: 100vw;
    padding-bottom: 10vh;
    
    


`
