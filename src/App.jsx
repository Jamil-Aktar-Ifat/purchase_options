import { useState } from "react";
import "./App.css";
// import DaisyNavBar from "./components/DaisyNavBar/DaisyNavBar";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNavBar></DaisyNavBar> */}
      <h1 className="text-2xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
