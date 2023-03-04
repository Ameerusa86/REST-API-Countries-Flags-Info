import "./App.css";
import Countries from "./Components/Countries";
import Navbar from "./Components/Navbar";
import Country from "./Components/Country";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
