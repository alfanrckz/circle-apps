import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

import MyProfile from "../components/MyProfile";
import MenuBar from "../components/MenuBar";

export default function Main({ children }: { children: ReactNode }) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const auth = useSelector((state: RootState) => state.auth);
  // console.log(auth);

  // useEffect(() => {
  //   const storeAuthData = localStorage.getItem("authData");
  //   if (storeAuthData) {
  //     const parsedAuthData = JSON.parse(storeAuthData);
  //     dispatch(AUTH_CHECK({ parsedAuthData }));
  //   }
  // }, [dispatch, auth]);

  return (
    <>
      <Grid h="100%" templateColumns="repeat(10, 1fr)">
        <GridItem
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
          colSpan={{ base: 0, md: 2 }}
        >
          <MenuBar />
        </GridItem>

        <GridItem
          w="100%"
          h="97vh"
          bg="mainBg.100"
          colSpan={{ base: 10, md: 5 }}
        >
          {children}
        </GridItem>

        <GridItem
          colSpan={{ base: 0, md: 3 }}
          h={"100vh"}
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
        >
          {/* <Profile /> */}
          <MyProfile />
        </GridItem>
      </Grid>
    </>
  );
}
