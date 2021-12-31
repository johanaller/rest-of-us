import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>hello from App</div>;
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
