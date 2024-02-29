import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedtab] = useState();
  return (
    <>
      <Sidebar selectedTab={selectedTab} setSelectedtab={setSelectedtab} />
      <div className="content-container">
        <Header setSelectedtab={selectedTab} />
        <Content selectedTab={selectedTab} />
      </div>
    </>
  );
}

export default App;
