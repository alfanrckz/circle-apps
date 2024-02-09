import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
