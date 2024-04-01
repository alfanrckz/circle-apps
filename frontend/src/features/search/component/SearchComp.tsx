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
import { useFollow } from "../../follow/hooks/useFollow";
import { IFollow } from "../../../interface/follow";

const SearchComp = (props: IFollow) => {
  const { filteredUsers, searchUsers, users } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFollowMap, setIsFollowMap] = useState<{[key: string]: boolean}>({});
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
    const newIsFollowMap: {[key: string]: boolean} = {};
    users.forEach(user => {
      newIsFollowMap[user.id] = isFollowMap[user.id] || false;
    });
    setIsFollowMap(newIsFollowMap);
  }, [users]);

  const handleFollowToggle = (userId: number) => {
    const newIsFollowMap = {...isFollowMap};
    newIsFollowMap[userId] = !newIsFollowMap[userId];
    setIsFollowMap(newIsFollowMap);

    if (newIsFollowMap[userId]) {
      follow(userId);
    } else {
      unfollow(userId);
    }
  };

  return (
    <Box h={"97vh"} color={"white"} mt={4}>
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
                  <Text mt={-1} color={"gray.400"}>
                    @{user.username}
                  </Text>
                </Box>
                <Spacer />{" "}
                <Box>
                  {!isFollowMap[user.id] ? (
                    <Button onClick={() => handleFollowToggle(user.id)}>
                      Follow
                    </Button>
                  ) : (
                    <Button onClick={() => handleFollowToggle(user.id)}>
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
};

export default SearchComp;
