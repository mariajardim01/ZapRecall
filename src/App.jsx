import "./css/reset.css";
import "./css/style.css";
import QUESTIONS from "./QUESTIONS";
import ZapRecall from "./components/ZapRecall"

function App() {
  

  return (
    <>
    
    <ZapRecall QUESTIONS={QUESTIONS}>
     
    
     </ZapRecall>
    </>
  )
}

export default App
