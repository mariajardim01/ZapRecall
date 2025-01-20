import { useState } from "react";
import styled from "styled-components"
import play from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";
import success from "../assets/icone_certo.png";
import almost from "../assets/icone_quase.png";
import fail from "../assets/icone_erro.png";

export default function Question ({questions, index,rigth,setRigth,almostRigth,setAlmostRigth,wrong,setWrong}){
    const [ face, setFace] = useState("front-face face");
    const  [question,setQuestion] =  useState(`Pergunta ${index + 1}`)
    const [ nameImage, setNameImage] = useState(play);
    const [ color, setColor] = useState("black");
    const [ isTurn, setIsTurn] = useState("");


    function clickedFace (){
        if (face == "front-face face" ){

           setFace(`back-face face`)
           setQuestion(questions.question)
            setNameImage(turn)
            setIsTurn("true")
        }
       

    }

    function turnCard(){
        setQuestion(questions.answer)
        
    }

    function forgot (){
        setColor("#FF3030")
        setQuestion(`Pergunta ${index + 1}`)
        setFace(`front-face face`)
        setNameImage(fail)
        setWrong([...wrong, questions.question])
    }

    function almostForgot(){
        setColor("#FF922E")
        setQuestion(`Pergunta ${index + 1}`)
        setFace(`front-face face`)
        setNameImage(almost)
        setAlmostRigth([...almostRigth, questions.question])
    }
    function remember(){
        setColor("#2FBE34")
        setQuestion(`Pergunta ${index + 1}`)
        setFace(`front-face face`)
        setNameImage(success)
        setRigth([...rigth, questions.question])
        
    }

    
    return (
        
        <QuestionCss face={face} nameimage={nameImage} question={question} questions={questions} color={color} isTurn={isTurn}>
            <div 
                className={face}
                onClick={clickedFace}>
                
                 <h1>{question}</h1>

            <img src={nameImage} onClick={turnCard}></img>
            <div className="buttons">
            <button className="forgot red" onClick={forgot}>Não lembrei</button>
            <button className="almost-forgot orange" onClick={almostForgot}>Quase não lembrei</button>
            <button className="remember green" onClick={remember}>Zap</button>
            </div>
            </div>
            
        </QuestionCss>
    )
}

const QuestionCss = styled.div`
    height: ${({ question, questions, face }) => (question === questions.answer ? "fit-content" : face === "front-face face" ? "8vh" : "16vh")};
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 4px 5px 0px #00000026;
    transition: all .5s;
    font-family: "Recursive", serif;
    position: relative;
    
    img{
        height: ${({ nameimage }) => (nameimage === turn ? "1vh%" : "3vh")};
        position:absolute;
        bottom: ${({ nameimage }) => (nameimage === turn ? "5px" : "30%")};
        right: ${({ nameimage }) => (nameimage === turn ? "5px" : "20px")};
        cursor: pointer;
        display:${({ question, questions }) => (question === questions.answer ? "none" : "")};
    }

    button{
        display:${({ question, questions }) => (question === questions.answer ? "" : "none")};
        height: 5vh;
        width: 40%;
        margin-left: 2%;
        font-family: "Recursive", serif;
        font-size:x-small;
        border-radius: 5px;
        border: none;
        color: white;
    }

    .face {
    height:${({face}) => (face === "front-face face" ? "8vh" : "16vh")};
    width: 100%;
    
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    display: flex;
    flex-direction: ${({ question, questions }) => (question === questions.answer ? "column" : "")};
    text-decoration: ${({color})=>(color == "black" ? "none" : "line-through")};
    color: ${({color})=> color};
    box-sizing: border-box;
    
    padding: 20px;
    justify-content:space-between;
    align-items: center;
    backface-visibility: hidden;
    transition: all .5s;
    transform-style: preserve-3d;
    pointer-events:  ${({color})=>(color != "black" ? "none" : "")};
    }
    .back-face{
        background-color: #FFFFD4;
        height: ${({ question, questions }) => (question === questions.answer ? "fit-content" : "100%")};
    }
    &:active .back-face {
     transform: ${({isTurn})=>{isTurn == "true" ? "rotateY(-180deg)" : ""}};
    }
    .buttons{
        margin-top: 3%;
        display: flex;
        justify-content: space-between;
        
    }
    .red{
        background-color: #FF3030;
        
    }.orange{
        background-color: #FF922E;
    }
    .green{
        background-color: #2FBE34;
    }
    
    `
