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

export default function SideNavbar() {
  return (
    <>
      <Box pos="fixed">
        <Box m={4}>
          <Heading color="green">Circle</Heading>
          <UnorderedList my={4}>
            <ListItem my={2} style={{ listStyleType: "none" }}>
              <Flex>
                <Link href="https://chakra-ui.com" isExternal>
                  <Center>
                    <IoMdHome />
                    <Text bg="mainBg.900" pl={2}>
                      HOME
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2} style={{ listStyleType: "none" }}>
              <Flex>
                <Link href="https://chakra-ui.com" isExternal>
                  <Center>
                    <MdOutlinePersonSearch />
                    <Text bg="mainBg.900" pl={2}>
                      SEARCH
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem my={2} style={{ listStyleType: "none" }}>
              <Flex>
                <Link href="https://chakra-ui.com" isExternal>
                  <Center>
                    <GoHeartFill />
                    <Text _hover={{ color: "red.500" }} bg="mainBg.900" pl={2}>
                      FOLLOWS
                    </Text>
                  </Center>
                </Link>
              </Flex>
            </ListItem>
            <ListItem style={{ listStyleType: "none" }} my={2}>
              <Flex>
                <Link href="" isExternal>
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
      </Box>
    </>
  );
}
