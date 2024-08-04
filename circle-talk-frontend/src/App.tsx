import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { API, setAuthToken } from "./libs/api";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import { RootState } from "./stores/types/rootState";


export default function App() {
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/check");
      console.log("authcheckkkkk",response.data.data);
      dispatch(AUTH_CHECK(response.data.data));
      setIsloading(false);
    } catch (err) {
      console.log(err);
      dispatch(AUTH_ERROR());
      setIsloading(false);
      navigate("/login");
    }
  }

  useEffect(() => {
    if (auth.id) {
      authCheck();
    } else {
      setIsloading(false);
    }
  }, []);



  return (
    <>
      {isLoading ? null : (
       <AnimatedRoutes/>
      )}
    </>
  );
}
