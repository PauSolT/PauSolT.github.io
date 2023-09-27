import "./App.css";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";
import Home from "./Modules/Home";
import Games from "./Pages/Games.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
