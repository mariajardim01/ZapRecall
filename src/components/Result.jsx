import styled from "styled-components";
import { useState, useEffect } from "react";
import sad from "../assets/sad.png";
import star from "../assets/star.png";
import laughing from "../assets/laughing.png";
import die from "../assets/die.png";
import nerd from "../assets/47 Sem Título_20250120153423.png";


export default function Result({questions,rigth,almostRigth,wrong}){
    const done = rigth.length + almostRigth.length + wrong.length
    let remember = rigth.length + almostRigth.length


    const [image,setImage] = useState(sad)
    const [message,setMessage] = useState("")
    const [result,setResult] = useState("")

    useEffect(() => {
        if (done === questions.length) {
          if (remember === questions.length) {
            setResult("Nerdola");
            setImage(nerd);
            setMessage(`Parabéns você lembrou de ${remember} de ${questions.length}`);
          } else if (remember >= questions.length * 0.8) {
            setResult("Parabéns!");
            setImage(laughing);
            setMessage(`Parabéns você lembrou de ${remember} de ${questions.length}`);
          } else if (remember >= questions.length * 0.6) {
            setResult("Muito bom!");
            setImage(star);
            setMessage(`Parabéns você lembrou de ${remember} de ${questions.length}`);
          }else if (remember == 0) {
            setResult("Péssimo, melhore");
            setImage(die);
            setMessage(`Você lembrou de ${remember} de ${questions.length}`);
          } else if (remember <= questions.length * 0.5) {
            setResult("Bom! mas pode melhorar");
            setImage(sad);
            setMessage(`Você lembrou de ${remember} de ${questions.length}`);
          } 
        }
      }, [done, rigth.length, questions.length]);



    return(
        <>
        <ResultView done={done} questions={questions}> 
        <div>
        <h1>{result}</h1>    
        <img src={image} image={image} nerd={nerd} />
        </div>
        <h2>{message}</h2>
            
         </ResultView>
        <Filter done={done} questions={questions}></Filter>
        </>
    )
}

const ResultView = styled.div`
    display: ${({done,questions}) => done == questions.length ? "flex" : "none"};
    flex-direction: column;
    height: 70vh;
    width: 70vw;
    position: fixed;
    top: 15%;
    background-color: aliceblue;
    border-radius: 10px;
    z-index: 2;
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    box-shadow: 0px 1px 0px rgba(0,0,0,.3);
    

    img{
        height: ${({image,nerd})=> image == nerd ? "20vh" : "3vh"};
        
        align-items: center;
        
        border-radius: 10px;
    }
    h1{
        font-family: "Righteous", serif;
        font-size: 36px ;
        text-align: center;
        color:#323232;
    }
    h2{
       
        font-family: "Recursive", serif;
        font-size: 24px;
        color:#323232;

    }

    @media(min-width: 900px){
        width: 40vw;
     
    }
    @media(max-height: 800px){
        
        h1{
        font-size: larger;
        }
        h2{
            font-size: medium;
            background-color: aqua;
        }
        img{
            height: ${({image,nerd})=> image == nerd ? "3vh%" : "4vh%"};
        
     
    }}
    

`

const Filter = styled.div`
    display: ${({done,questions}) => done == questions.length ? "flex" : "none"};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: #000000b8;
    z-index: 1;
`

