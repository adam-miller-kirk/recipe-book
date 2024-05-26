// src/App.jsx
import React, { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
