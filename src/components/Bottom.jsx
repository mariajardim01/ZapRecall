import styled from "styled-components"


export default function Bottom ({questions,rigth,almostRigth,wrong}){
    const done = rigth.length + almostRigth.length + wrong.length
    console.log(rigth.length + almostRigth.length + wrong.length)
    return(
        <BottomCss>
            {done}/{questions.length} CONCLUÍDOS
        </BottomCss>
    )
}


const BottomCss = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: white;
    box-shadow: 0px -4px 6px 0px #0000000D;
    display: flex;
    position: fixed;
    bottom: 0px;
    right: 0px;
    align-items: center;
    justify-content: center;
    font-family: "Recursive", serif;
`