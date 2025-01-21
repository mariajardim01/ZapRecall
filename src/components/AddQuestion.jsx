import styled from "styled-components"
import { useState } from "react"

export default function AddQuestion({QUESTIONS , setQuestions}){

    const [addTime, setAddTime] = useState("false")
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState("")
    const [errorQuestion, setErrorQuestion] = useState("")
    const [errorAnswer, setErrorAnswer] = useState("")

    function setTime (){
        setAddTime("true")
    }

    function addQuestion (){

        let card = {question , answer }
        setQuestions([...QUESTIONS, card])
        console.log(QUESTIONS)
        if (answer == ""){
            setErrorAnswer("A resposta não pode ser nula")
        }else {
            setErrorAnswer("")
        }
        if(question == ""){
                setErrorQuestion("A questão não pode ser nula")
            
        }else {
            setErrorQuestion("")
        }
        if ((question != "")&& (answer != "" ) ){
                setQuestions([...QUESTIONS, card])
                setAddTime("false")
        }
        
        
    }

    return(
        <>
        <AddQuestionButton onClick={setTime} QUESTIONS={QUESTIONS} setQuestions={setQuestions} >Adicionar um cartão</AddQuestionButton>
        <Filter addTime={addTime}></Filter>
        <AddQuestionDiv addTime={addTime}>
            
            <h1>Adicionar um Card</h1>
            <QuestionsInput >
            <Input placeholder="Insira a pergunta" onChange={(e) => setQuestion(e.target.value)}></Input>
            <p>{errorQuestion}</p>
            <Input placeholder="Insira a resposta" onChange={(e) => setAnswer(e.target.value)}></Input>
            <p>{errorAnswer}</p>
            </QuestionsInput>
            <button onClick={addQuestion}>Adicionar</button>
        </AddQuestionDiv>
        </>
    )

}

const AddQuestionButton = styled.button`
    background-color: #f22626;
    height: 4vh;
    color: white;
    border-radius: 3px;
    position: absolute;
    top:10vh;
    right: 2vw;
    font-family: "Recursive", serif;
    border: none;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    &:active {transform: translateY(4px);}
`
const AddQuestionDiv = styled.div`
    display: ${({addTime})=> addTime == "true" ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    height: 30vh;
    width:  50vw;
    position: fixed;
    top:20vh;
    background-color: white;
    border-radius: 10px;
    z-index: 2;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    padding-top:2vh ;
    padding-bottom: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    box-sizing: border-box;
    justify-content: space-between;
    h1{
        font-family: "Righteous", serif;
        font-size: 36px ;
    }
    button{
    
     background-color: #f22626;
    height: 4vh;
    color: white;
    border-radius: 3px;
    right: 2vw;
    font-family: "Recursive", serif;
    border: none;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    }
    &:active button {transform: translateY(4px);}
    p{
        font-family: "Recursive", serif;
        color: red;
        height: 3vh;
        
    }
   
`

const QuestionsInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
const Input = styled.input`
    width: 40vw;
    height: 5vh;
    border-radius: 5px;
    font-size: 20px;
`
const Filter = styled.div`
    display: ${({addTime})=> addTime == "true" ? "flex" : "none"};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: #000000b8;
    z-index: 1;
`