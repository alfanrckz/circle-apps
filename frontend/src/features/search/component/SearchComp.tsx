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
  Spacer, 
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useSearch } from "../hooks/useSearch";
import { useFollow } from "../../follow/hooks/useFollow";
import { IFollow } from "../../../interface/follow";

export default function SearchComp(props: IFollow) {
  const { filteredUsers, searchUsers, users } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFollowMap, setIsFollowMap] = useState<{ [key: string]: boolean }>(
    {}
  );
  const { follow, unfollow } = useFollow();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    searchUsers(value);
  };

  useEffect(() => {
    if (!searchQuery) setSearchQuery("");
  }, [searchQuery]);

  // Update isFollowMap when users change
  useEffect(() => {
    const newIsFollowMap: { [key: string]: boolean } = {};
    users.forEach((user) => {
      newIsFollowMap[user.id!] = isFollowMap[user.id!] || false;
    });
    setIsFollowMap(newIsFollowMap);
    setSearchQuery("");
  }, [users]);

  const handleFollowToggle = (userId: number) => {
    const newIsFollowMap = { ...isFollowMap };
    newIsFollowMap[userId] = !newIsFollowMap[userId];
    setIsFollowMap(newIsFollowMap);

    if (newIsFollowMap[userId]) {
      follow(userId);
    } else {
      unfollow(userId);
    }
  };

  // Filter users only when there is a search query
  const displayUsers = searchQuery ? filteredUsers : [];

  return (
    <Box h={"89vh"} color={"white"} mt={4} mr={-4}>
      <Text ml={2} fontWeight={"bold"} fontSize={"2xl"} my={2}>
        Search
      </Text>
      <Card mx={4} mb={2} p="5px" h="100%" bg={"mainBg.200"} color={"white"}>
        <Stack spacing={3} mt="6" px={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser color="gray.300" />}
            />
            <Input
              focusBorderColor="lime"
              placeholder="look for people around you.."
              borderRadius="10px"
              onChange={handleSearchInputChange}
            />
          </InputGroup>
          <Stack
            h={"70vh"}
            overflowY={"auto"}
            sx={{
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
            }}
          >
            {displayUsers.map((user) => (
              <Box key={user.id} display="flex" gap={2} position="relative">
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  marginLeft={4}
                  marginTop={3}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={user.picture ? user.picture : "/placeholder-profile.jpg"}
                  alt="picture"
                />
                <Box marginTop={2} ml={2}>
                  <Text textTransform={"capitalize"} fontWeight={"bold"}>
                    {user.fullName}
                  </Text>
                  <Text mt={-1} color={"gray.400"} fontSize={13}>
                    @{user.username}
                  </Text>
                </Box>
                <Spacer />{" "}
                <Box mt={5} textAlign={"center"}>
                  {!isFollowMap[user.id!] ? (
                    <Button
                      border={"1px"}
                      borderColor="grey"
                      bg="main.bg.100"
                      fontSize={12}
                      textColor={"white"}
                      h={7}
                      _hover={{ bg: "main.bg.100" }}
                      onClick={() => handleFollowToggle(user.id!)}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      border={"1px"}
                      borderColor="white"
                      bg="main.bg.100"
                      fontSize={12}
                      textColor={"white"}
                      _hover={{ bg: "main.bg.100" }}
                      h={7}
                      onClick={() => handleFollowToggle(user.id!)}
                    >
                      Unfollow
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}


