import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import Follow from "./components/Follow";
import ProfileDetail from "./pages/ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores/types/rootState";
import { useEffect, useState } from "react";
import Main from "./layouts/Main";
import { API, setAuthToken } from "./libs/api";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";

export default function App() {
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // async function authCheck() {
  //   try {
  //     setAuthToken(localStorage.token);
  //     const response = await API.get("/check");
  //     console.log(response.data);
  //     dispatch(AUTH_CHECK(response.data));
  //     setIsloading(false);
  //     // Redirect to home after successful login check
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //     dispatch(AUTH_ERROR());
  //     setIsloading(false);
  //     // Redirect to login page if authentication fails
  //     // navigate("/login");
  //   }
  // }

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/check");
      console.log(response.data);
      dispatch(AUTH_CHECK(response.data));
      setIsloading(false);
    } catch (err) {
      console.log(err);
      dispatch(AUTH_ERROR());
      setIsloading(false);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsloading(false);
    }
  }, []);

  function IsLogin() {
    if (!auth.username) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    if (auth.username) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route path="*" element={<h1>Pages Not Found</h1>} />
          <Route path="/" element={<IsLogin />}>
            <Route
              element={
                <Main>
                  <Home />
                </Main>
              }
              path="/"
            />

            <Route
              element={
                <Main>
                  <Follow />
                </Main>
              }
              path="/follow"
            />

            <Route
              element={
                <Main>
                  <ProfileDetail />
                </Main>
              }
              path="/profile/:id"
            />
          </Route>

          <Route path="/" element={<IsNotLogin />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Route>
        </Routes>
      )}
      {/* 
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes> */}
    </>
  );
}
