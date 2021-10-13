import React from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
