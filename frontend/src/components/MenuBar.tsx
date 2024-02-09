import {
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Center,
  Link,
  // ExternalLinkIcon,
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

export default function MenuBar() {
  return (
    <>
      <Box pos="fixed">
        <Box m={4}>
          <Heading color="green">Circle</Heading>
          <UnorderedList my={4} style={{ listStyleType: "none" }}>
            <ListItem my={2}>
              <Flex>
                <Link
                  href="https://chakra-ui.com"
                  isExternal
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  <Center>
                    <IoMdHome />
                    <Text bg="mainBg.900" pl={2}>
                      HOME
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2}>
              <Flex>
                <Link
                  href="https://chakra-ui.com"
                  isExternal
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  <Center>
                    <MdOutlinePersonSearch />
                    <Text bg="mainBg.900" pl={2}>
                      SEARCH
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2}>
              <Flex>
                <Link
                  href="https://chakra-ui.com"
                  isExternal
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  <Center>
                    <GoHeartFill />
                    <Text bg="mainBg.900" pl={2}>
                      FOLLOWS
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2}>
              <Flex>
                <Link
                  href=""
                  isExternal
                  _hover={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  <Center>
                    <CgProfile />
                    <Text bg="mainBg.900" pl={2}>
                      PROFILE
                    </Text>
                  </Center>
                </Link>
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
        <Center mt="290">
          <CiLogout />
          <Text cursor="pointer">Logout</Text>
        </Center>
      </Box>
    </>
  );
}
