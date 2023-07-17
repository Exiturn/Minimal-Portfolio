import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-custom-alert/dist/index.css";

import Navbar from "./components/navbar/Navbar";
import Mouse from "./components/mouse/mouse";
import { HoverContextProvider } from "./utils/HoverContext";
import Circle from "./components/backgroundCircle/Circle";
import Project from "./pages/Project";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <HoverContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </HoverContextProvider>
      <Circle />
      <Toaster />
    </Router>
  );
}

export default App;
