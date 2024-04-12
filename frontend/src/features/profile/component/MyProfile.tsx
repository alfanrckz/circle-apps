import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import ModalEditUser from "../../edituser/component/ModalEditUser";
import { useFollow } from "../../follow/hooks/useFollow";
import { useSearch } from "../../search/hooks/useSearch";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";


export default function MyProfile() {
  const profile = useSelector((state: RootState) => state.profile);
  const [isFollowMap, setIsFollowMap] = useState<{ [key: string]: boolean }>(
    {}
  );
  const { follow, unfollow } = useFollow();
  const { filteredUsers, users } = useSearch();
  const { check, getProfileById } = useProfile();
  const navigate = useNavigate()

  useEffect(() => {
    const newIsFollowMap: { [key: string]: boolean } = {};
    users.forEach((user) => {
      newIsFollowMap[user.id!] = isFollowMap[user.id!] || false;
    });
    setIsFollowMap(newIsFollowMap);
  }, [users]);


  useEffect(() => {
    check();
  }, []);

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

  const setItem = (id: any) => {
    localStorage.setItem("id", id);
    getProfileById()
    navigate(`/detail-profile/${id}`)   
  };

  return (
    <Box
      pos={"fixed"}
      h={"100vh"}
      overflowY={"auto"}
      sx={{
        "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
        "&::-webkit-scrollbar-thumb": { bg: "green.500" },
      }}
    >
      <Box m={4}>
        <Card bg="mainBg.200" borderRadius="lg">
          <Box m={4} color="gray.100">
            <Heading size="sm">My Profile</Heading>
            <Box my={3} mb={6} position="relative">
              <Image
                zIndex={1}
                borderColor="gray.200"
                objectFit="cover"
                borderRadius="2xl"
                h={20}
                w="100%"
                src={
                  profile.cover_photo
                    ? profile.cover_photo
                    : "/placeholder-profile.jpg"
                }
                alt="cover_photo"
              />
              <Center>
                <Image
                  position="absolute"
                  zIndex={2}
                  border="2px"
                  borderColor="gray.200"
                  borderRadius="100%"
                  objectFit="cover"
                  h={14}
                  w={14}
                  left={2}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={
                    profile.picture
                      ? profile.picture
                      : "/placeholder-profile.jpg"
                  }
                  alt="avatar"
                />
              </Center>

              <Box pt={2} float={"right"}>
                <ModalEditUser />
              </Box>
            </Box>
            <Heading size="sm" mt={10} textTransform={"capitalize"}>
              {profile?.fullName}
            </Heading>
            <Text fontSize="xs" color={"gray.400"}>
              @{profile?.username}
            </Text>
            <Text fontSize="sm" py={2}>
              {profile?.bio}
            </Text>
            <Box>
              <Flex>
                <Box>
                  <Flex>
                    <Text fontSize="sm" py={2} as="b">
                      {profile?.followings_count?.length}
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Following
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex pl={4}>
                    <Text fontSize="sm" py={2} as="b">
                      {profile?.followers_count?.length}
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Followers
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* suggestion */}
      <Box m={4}>
        <Card
          color="gray.100"
          bg="mainBg.200"
          h={"30vh"}
          overflowY={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "full",
            },
          }}
        >
          <Heading size="sm" mt={3} ml={3} textColor={"green"}>
            Suggested for you
          </Heading>
          {/* Suggest */}

          {filteredUsers.map((user: any) => (
            <Box key={user.id} display="flex" gap={2} position="relative">
              <Box onClick={() => setItem(user.id!)}>
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  h={8}
                  w={8}
                  marginLeft={4}
                  marginTop={2}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={user.picture ? user.picture : "/placeholder-profile.jpg"}
                  alt="picture"
                />
              </Box>
              <Box marginTop={2} ml={2}>
                <Text
                  textTransform={"capitalize"}
                  fontWeight={"bold"}
                  fontSize={12}
                >
                  {user.fullName}
                </Text>
                <Text mt={-1} color={"gray.400"} fontSize={11}>
                  @{user.username}
                </Text>
              </Box>
              <Spacer />{" "}
              <Box mt={3} ml={2} textAlign={"center"}>
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
        </Card>

        {/* footer */}
        <Card bg="#262626" mt="5">
          <CardBody
            display={"flex"}
            alignItems={"center"}
            gap={2}
            color="#EDF2F7"
          >
            <Text fontSize={"12px"} fontWeight={"bold"}>
              Developed by Alfansyuri Ziaulhaq
            </Text>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillFacebook />
            <AiFillInstagram />
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
