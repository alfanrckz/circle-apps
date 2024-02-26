import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { AUTH_LOGOUT } from "../stores/rootReducer";
import { useDispatch } from "react-redux";

export default function MenuBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("authData");
    dispatch(AUTH_LOGOUT());
    // localStorage.removeItem("token");
    // localStorage.removeItem("id");
    // document.cookie = "C.id=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.href = "/login";
  };
  return (
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
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Create Post
        </Button>
      </Center>
      <Spacer />
      <Center mt={310} onClick={handleLogout}>
        <CiLogout />
        <Text cursor="pointer">Logout</Text>
      </Center>
    </Box>
  );
}
