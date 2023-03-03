import "./App.css";
import Countries from "./Components/Countries";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
