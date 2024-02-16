import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import Follow from "./components/Follow";
import Content from "./components/Content";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route element={<Content />} path="/" />
          <Route element={<Follow />} path="/follow" />
          <Route element={<Search />} path="/search" />
        </Route>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
