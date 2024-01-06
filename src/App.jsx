import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        App React
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
