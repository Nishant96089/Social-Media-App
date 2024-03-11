import "./App.css";
import "./MobileApp.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import PostlistProvider from "./store/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostlistProvider>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content-container">
        <Header setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <Content selectedTab={selectedTab} />
      </div>
    </PostlistProvider>
  );
}

export default App;
