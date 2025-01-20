import styled from "styled-components"
import Question from "./Question"

export default function QuestionsList ({QUESTIONS,rigth,setRigth,almostRigth,setAlmostRigth,wrong,setWrong}){
    return(
        <Container>
            {QUESTIONS.map((questions,index)=>{
                return (
                    <Question questions={questions} index={index} key={index} rigth={rigth} setRigth={setRigth} almostRigth={almostRigth} setAlmostRigth={setAlmostRigth} wrong={wrong} setWrong={setWrong}></Question>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    box-sizing: border-box;
    padding: 20px;
`

