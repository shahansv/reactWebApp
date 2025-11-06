import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Blog from "./Blog";
import Community from "./Community";
import Docs from "./Docs";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
