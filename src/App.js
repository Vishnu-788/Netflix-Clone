import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/App.css"
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";
import { ACTION, ORIGINALS } from "./urls.js";

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Banner/>
      <RowPost url={ORIGINALS} title='Netflix Originals' isSmall={false} />
      <RowPost url={ACTION} title='Action' isSmall={true} />
      
    </div>
  );
}

export default App;
