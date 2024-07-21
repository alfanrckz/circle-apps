import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Follow from "../components/Follow";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProfileDetail from "../pages/ProfileDetail";
import { Register } from "../pages/Register"; 
import Search from "../pages/Search";
import { ThreadDetail } from "../pages/ThreadDetail";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  function IsLogin() {
    if (!localStorage.token) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    if (localStorage.token) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<h1>Pages Not Found</h1>} />
        <Route path="/" element={<IsLogin />}>
          <Route
            element={
              <Main>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Home />
                </motion.div>
              </Main>
            }
            path="/"
          />
          <Route
            element={
              <Main>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                <Follow />
                </motion.div>
              </Main>
            }
            path="/follow"
          />
          <Route
            element={
              <Main>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}

                >
                <Search />
                </motion.div>
              </Main>
            }
            path="/search"
          />
          <Route
            element={
              <Main>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}

                >
                <ProfileDetail />
                </motion.div>
              </Main>
            }
            path="/detail-profile/:id"
          />
          <Route
            element={
              <Main>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}

                >
                <ThreadDetail />
                </motion.div>
              </Main>
            }
            path="/thread-detail/:id"
          />
        </Route>
        <Route path="/" element={<IsNotLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
