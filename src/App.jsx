import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Blog from "./Blog";
import Learn from "./Learn";
import Community from "./Community";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
