import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Spacer, // Import Spacer
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useSearch } from "../hooks/useSearch";

const SearchComp = () => {
  const { filteredUsers, searchUsers } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    searchUsers(value);
  };

  useEffect(() => {
    if (!searchQuery) return setSearchQuery("");
  }, [searchQuery]);

  return (
    <Box h={"97vh"} color={"white"} mt={4}>
      <Card mx={4} mb={2} p="5px" h="100%" bg={"mainBg.200"} color={"white"}>
        <Stack spacing={3} mt="6" px={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser color="gray.300" />}
            />
            <Input
              focusBorderColor="lime"
              placeholder="look for people around you"
              borderRadius="20px"
              // value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </InputGroup>
          <Stack
            h={"80vh"}
            overflowY={"auto"}
            sx={{
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
            }}
          >
            {filteredUsers.map((user) => (
              <Box key={user.id} display="flex" gap={2} position="relative">
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  marginLeft={4}
                  marginTop={4}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={user.picture ? user.picture : "/placeholder-profile.jpg"}
                  alt="picture"
                />
                <Box marginTop={2} ml={2}>
                  <Text textTransform={"capitalize"}>{user.fullName}</Text>
                  <Text>@{user.username}</Text>
                </Box>
                <Spacer />{" "}
                <Box>
                  <Button
                    border={"1px"}
                    backgroundColor={"mainBg.200"}
                    colorScheme="green"
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default SearchComp;
