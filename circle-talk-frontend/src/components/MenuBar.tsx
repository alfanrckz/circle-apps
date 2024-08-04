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
import { RootState } from "../stores/types/rootState";
import PostModal from "./PostModal";

export default function MenuBar() {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch(); 
  const handleLogout = () => {
    localStorage.removeItem("authData");
    dispatch(AUTH_LOGOUT());
    window.location.href = "/login";
  };

  return (
    <Box bg={"mainBg.200"} rounded={"lg"} ml={2} position="relative">
      <Box h={"94vh"} m={4} pt={2}>
        <Flex gap={3} ml={4}>
          <Heading color="#478CCF">Circle Talk</Heading>
          <Heading color="#478CCF" mt={1}>
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
                      color: isActive ? "#478CCF" : "",

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
                      color: "#478CCF",
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
                      color: isActive ? "#478CCF" : "",

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
                      color: "#478CCF",
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
                      color: isActive ? "#478CCF" : "",

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
                      color: "#478CCF",
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
                      color: isActive ? "#478CCF" : "",

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
                      color: "#478CCF",
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
          position="absolute"
          bottom="0"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center" 
          onClick={handleLogout}
          cursor="pointer"
          _hover={{ fontWeight: "bold", color: "red" }}
        >
          <Box>
            {" "}
            <CiLogout />
          </Box>
          <Text>Logout</Text>
        </Box>
      </Box>
    </Box>
  );
}
