import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:keyword" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
