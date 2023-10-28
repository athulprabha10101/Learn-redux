import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(3);
  const [color, setColor] = useState("red")
  

  return (
    <div className="App">
      <Header count={count} color={color} />
      <Main count={count} setCount={setCount} color={color} setColor={setColor} />
      <Footer color={color}/>
    </div>
  );
}

export default App;
