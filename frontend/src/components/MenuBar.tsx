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
    window.location.href = "/login";
  };

  return (
    <Box>
      <Box m={4}>
        <Heading color="green">Circle X</Heading>
        <UnorderedList my={4} style={{ listStyleType: "none" }}>
          <ListItem my={2}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <IoMdHome />
                </Text>
                <Link to={"/"}>
                  <Text
                    // bg="mainBg.900"
                    pl={2}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    HOME
                  </Text>
                </Link>
              </Center>
            </Flex>
          </ListItem>

          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <MdOutlinePersonSearch />
                </Text>
                <Link to={"/search"}>
                  <Text
                    bg="mainBg.900"
                    pl={2}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    SEARCH
                  </Text>
                </Link>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <GoHeartFill />
                </Text>
                <Link to={"/follow"}>
                  <Text
                    bg="mainBg.900"
                    pl={2}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    FOLLOWS
                  </Text>
                </Link>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <CgProfile />
                </Text>
                <Link to={"/detail-profile"}>
                  <Text
                    bg="mainBg.900"
                    pl={2}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
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

      <Button
        rounded={"full"}
        w={"90%"}
        mx={4}
        color={"white"}
        bg={"green"}
        variant={"solid"}
        _hover={{
          // fontWeight: "bold",
          bg: "green.900",
        }}
      >
        Create Post
      </Button>
      <Spacer />
      <Center mt={250} onClick={handleLogout}>
        <CiLogout />
        <Text cursor="pointer" _hover={{ fontWeight: "bold", color: "red" }}>
          Logout
        </Text>
      </Center>
    </Box>
  );
}
