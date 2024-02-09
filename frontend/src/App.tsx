import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
