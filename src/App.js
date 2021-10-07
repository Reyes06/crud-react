import React from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <div className="App">
      <CrudApi />
      <hr/>
      <CrudApp />
    </div>
  );
}

export default App;
