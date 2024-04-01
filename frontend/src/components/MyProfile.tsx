import {
  Box,
  Card,
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  CardBody,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useEffect } from "react";
import { useSearch } from "../features/search/hooks/useSearch";
import { API } from "../libs/api";
import { GET_PROFILE } from "../stores/slices/profileSlice";

export default function MyProfile() {
const profile = useSelector((state: RootState) => state.profile);
// console.log(profile)
  const dispatch = useDispatch();
  const { filteredUsers, searchUsers } = useSearch();

  useEffect(() => {
    // const storeAuthData = localStorage.getItem("authData");
    // if (storeAuthData) {
    //   const parsedAuthData = JSON.parse(storeAuthData);
    // }
    check();
  }, []);

  async function check() {
    const response = await API.get("/check", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log("cek", response.data);
    dispatch(GET_PROFILE(response.data.data));
  }

  return (
    <Box
      pos={"fixed"}
      h={"107vh"}
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
                borderRadius="md"
                h={20}
                w="100%"
                // maxW={{ base: "100%", sm: "200px" }}
                src="https://png.pngtree.com/background/20220724/original/pngtree-ackground-hijau-keren-dan-kosong-abstract-untuk-wallpaper-template-desain-ppt-picture-image_1741397.jpg"
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
                  src={profile.picture ? profile.picture : "/placeholder-profile.jpg"}
                  alt="avatar"
                />
              </Center>
              <Box pt={4}>
                <Button
                  colorScheme="teal"
                  size="xs"
                  borderRadius="md"
                  float={"right"}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>
            <Heading size="sm" mt={2} textTransform={"capitalize"}>
              ✨{profile?.fullName}✨
            </Heading>
            <Text fontSize="xs" color={"gray.400"}>
              @{profile?.username}
            </Text>
            <Text fontSize="sm" py={2}>
              Siksa kubur berat broooo maka perbuatlah kebaikan di dunia
              walaupun engkau sedang di banned👍
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
          <Heading size="sm" mt={3} ml={3}>
            Suggested for you
          </Heading>
          {/* Suggest */}

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
                <Text textTransform={"capitalize"} fontWeight={"bold"}>
                  {user.fullName}
                </Text>
                <Text mt={-1} color={"gray.400"} fontSize={12}>
                  @{user.username}
                </Text>
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
