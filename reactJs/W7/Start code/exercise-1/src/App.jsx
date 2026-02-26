import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header />
      <main className="scores-container"> 
        <Scores courseName="JAVA" scores={JAVA_RESULTS}></Scores>
        <Scores courseName="PYTHON" scores={PYTHON_RESULTS}></Scores>
        <Scores courseName="HTML" scores={HTML_RESULTS}></Scores>
        <Scores courseName="ENGLISH" scores={ENGLISH_RESULTS}></Scores>
      </main>
    </>
  );
}

export default App;
