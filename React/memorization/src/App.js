import { useState, useMemo } from "react";
// import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // const data = useMemo(() => {
  //   return{name : "Ecem"}
  // }, []);

  return (
    <div className="App">
      {/* <Header data={data}/> */}

      <Navigation increment={() => setNumber(number + 1)} />

      <hr />

      <h1>{number}</h1>
    </div>
  );
}

export default App;
