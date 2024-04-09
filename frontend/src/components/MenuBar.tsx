import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  Spacer,
  Text,
  UnorderedList
} from "@chakra-ui/react";

import { BsThreads } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AUTH_LOGOUT } from "../stores/rootReducer";
import PostModal from "./PostModal";
import { RootState } from "../stores/types/rootState";

export default function MenuBar() {
  const profile = useSelector((state: RootState) => state.profile);
  // console.log("current Profile :",profile);
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
                  onClick={() => localStorage.setItem ("id", JSON.stringify(profile.id))}
                  to={`/detail-profile/${profile.id}`}
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
      <PostModal/>
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
