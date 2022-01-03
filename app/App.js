import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import HomeGuest from "./src/components/HomeGuest";
import Terms from "./src/components/Terms";
import About from "./src/components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
