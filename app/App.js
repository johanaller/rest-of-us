import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import HomeGuest from "./src/components/HomeGuest";

function App() {
  return (
    <div>
      <Header />
      <HomeGuest />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
