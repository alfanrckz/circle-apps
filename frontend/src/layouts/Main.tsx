import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { AUTH_LOGOUT } from "../stores/rootReducer";
import { useDispatch } from "react-redux";

import MyProfile from "../components/MyProfile";

export default function Main({ children }: { children: ReactNode }) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const auth = useSelector((state: RootState) => state.auth);
  // console.log(auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const storeAuthData = localStorage.getItem("authData");
  //   if (storeAuthData) {
  //     const parsedAuthData = JSON.parse(storeAuthData);
  //     dispatch(AUTH_CHECK({ parsedAuthData }));
  //   }
  // }, [dispatch, auth]);

  const handleLogout = () => {
    localStorage.removeItem("authData");
    dispatch(AUTH_LOGOUT());
    // localStorage.removeItem("token");
    // localStorage.removeItem("id");
    // document.cookie = "C.id=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.href = "/login";
  };

  return (
    <>
      <Grid h="100%" templateColumns="repeat(10, 1fr)">
        <GridItem
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
          colSpan={{ base: 0, md: 2 }}
        >
          {/* <SideNavbar /> */}

          <Box pos="fixed">
            <Box m={4}>
              <Heading color="green">Circle</Heading>
              <UnorderedList my={4} style={{ listStyleType: "none" }}>
                <ListItem my={2}>
                  <Flex>
                    <Center>
                      <IoMdHome />
                      <Link to={"/"}>
                        <Text
                          bg="mainBg.900"
                          pl={2}
                          _hover={{
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          HOME
                        </Text>
                      </Link>
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem my={2}>
                  <Flex>
                    <Center>
                      <MdOutlinePersonSearch />
                      <Link to={"/search"}>
                        <Text
                          bg="mainBg.900"
                          pl={2}
                          _hover={{
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          SEARCH
                        </Text>
                      </Link>
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem my={2}>
                  <Flex>
                    <Center>
                      <GoHeartFill />
                      <Link to={"/follow"}>
                        <Text
                          bg="mainBg.900"
                          pl={2}
                          _hover={{
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          FOLLOWS
                        </Text>
                      </Link>
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem my={2}>
                  <Flex>
                    <Center>
                      <CgProfile />
                      <Link to={"/detail-profile"}>
                        <Text
                          bg="mainBg.900"
                          pl={2}
                          _hover={{
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          PROFILE
                        </Text>
                      </Link>
                    </Center>
                  </Flex>
                </ListItem>
              </UnorderedList>
            </Box>
            <Center>
              <Button
                w={"100%"}
                mx={4}
                color={"white"}
                bg={"green"}
                variant={"solid"}
              >
                Create Post
              </Button>
            </Center>
            <Center mt="290" onClick={handleLogout}>
              <CiLogout />
              <Text cursor="pointer">Logout</Text>
            </Center>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          bg="mainBg.100"
          colSpan={{ base: 10, md: 5 }}
        >
          {children}
        </GridItem>

        <GridItem
          colSpan={{ base: 0, md: 3 }}
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
