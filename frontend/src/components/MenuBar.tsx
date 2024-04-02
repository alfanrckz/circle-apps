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
import { BsThreads } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
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
    <Box bg={"mainBg.200"} rounded={"lg"} ml={2}>
      <Box h={"94vh"} m={4} pt={2}>
        <Flex gap={3} ml={4}>
          <Heading color="green">Circle</Heading>
          <Heading color="green" mt={1}>
            <BsThreads />
          </Heading>
        </Flex>
        <UnorderedList ml={7} my={4} style={{ listStyleType: "none" }}>
          <ListItem my={2}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <IoMdHome />
                </Text>
                <NavLink
                  to={"/"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
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
                </NavLink>
              </Center>
            </Flex>
          </ListItem>

          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <MdOutlinePersonSearch />
                </Text>
                <NavLink
                  to={"/search"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
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
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <GoHeartFill />
                </Text>
                <NavLink
                  to={"/follow"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
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
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5}>
            <Flex>
              <Center>
                <Text fontSize={"2xl"}>
                  <CgProfile />
                </Text>
                <NavLink
                  to={"/detail-profile"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
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
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
        </UnorderedList>
        <Button
          mt={5}
          rounded={"full"}
          w={"90%"}
          mx={4}
          color={"white"}
          bg={"green"}
          variant={"solid"}
          _hover={{

            borderColor: "white",
          }}
        >
          Create Post
        </Button>
        <Box
          mt={240}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"} 
          onClick={handleLogout}
          cursor="pointer"
          _hover={{ fontWeight: "bold", color: "red" }}
        >
          <Box ml={2}>
            {" "}

            <CiLogout />
          </Box>
          <Text>Logout</Text>
        </Box>
      </Box>

      <Spacer />
    </Box>
  );
}
