import {
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Center,

  // ExternalLinkIcon,
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../stores/rootReducer";

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
    <>
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
                      _hover={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      HOME
                    </Text>
                  </Link>
                </Center>
              </Flex>
            </ListItem>
            <ListItem my={2}>
              <Flex>
                <Link to="/search">
                  <Center>
                    <MdOutlinePersonSearch />
                    <Text
                      bg="mainBg.900"
                      pl={2}
                      _hover={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      SEARCH
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2}>
              <Flex>
                <Center>
                  <GoHeartFill />
                  <Link to="/follow">
                    <Text
                      bg="mainBg.900"
                      pl={2}
                      _hover={{ textDecoration: "none", fontWeight: "bold" }}
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
                  <Link to="/detail-profile">
                    <Text
                      bg="mainBg.900"
                      pl={2}
                      _hover={{ textDecoration: "none", fontWeight: "bold" }}
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
    </>
  );
}
