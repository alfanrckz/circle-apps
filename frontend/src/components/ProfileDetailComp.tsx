import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { AUTH_CHECK } from "../stores/rootReducer";

const ProfileDetailComp: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const storeAuthData = localStorage.getItem("authData");
    if (storeAuthData) {
      const parsedAuthData = JSON.parse(storeAuthData);
      dispatch(AUTH_CHECK({ user: parsedAuthData }));
    }
  }, [dispatch, auth]);

  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handlelike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <>
      <Box h={"100vh"} color={"white"} mt={10}>
        <Card mx={2} mb={2} p="5px" h="310px" bg={"mainBg.200"} color={"white"}>
          <Text fontWeight="500" my={2} mx={4}>
            My Profile
          </Text>
          <Flex direction="column" alignItems="center" mx={2}>
            <Image
              src="https://i.ibb.co/xmP2pS6/Profile.png"
              // maxW='100%'
              w={"100%"}
              h={"30%"}
              borderRadius="20px"
            />
            <Flex justify="space-between" w="full" p={3}>
              <Image
                src={auth.picture ? auth.picture : "/placeholder-profile.jpg"}
                border="5px solid red"
                width="68px"
                height="68px"
                mt="-38px"
                borderRadius="50%"
              />
              <Text textAlign={"center"}>
                {" "}
                0<Text>Post</Text>
              </Text>
              <Text textAlign={"center"}>
                {auth.followers_count ?? 0}
                <Text>Follower</Text>
              </Text>
              <Text textAlign={"center"}>
                {auth.followings_count ?? 0}
                <Text>Following</Text>
              </Text>
              <NavLink to={"/edit-profile"}>
                <Button
                  boxSize={"fit-content"}
                  fontSize={13}
                  rounded={15}
                  border="2px"
                  borderColor={"black"}
                  bg={"white"}
                  mt={1}
                  alignItems={"end"}
                >
                  Edit Profile
                </Button>
              </NavLink>
            </Flex>
            <Box ml={10} mb={1} textAlign={"left"} w={"100%"}>
              <Text
                textAlign={"left"}
                fontWeight="700"
                textTransform={"capitalize"}
              >
                {auth.fullName}
              </Text>
              <Text textAlign={"left"} fontSize="10px" fontWeight={"500"}>
                @{auth.username}
              </Text>
              <Text textAlign={"left"} fontSize="12px" fontWeight="600">
                Siksa kubur berat broooo
                {auth.bio}
              </Text>
            </Box>
          </Flex>
        </Card>

        <Card p={2} w={"100%"} bg={"mainBg.200"} color={"white"}>
          <Flex gap={4}>
            <Avatar name="gatot" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Flex alignItems="center" gap={1}>
                <Heading size="m">Bujang</Heading>
                <Text>@bujang</Text>
                <Icon
                  boxSize={1.5}
                  mt={1}
                  viewBox="0 0 200 200"
                  color="gray.500"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text color="gray">1h</Text>
              </Flex>

              <NavLink to={"/status"}>
                <Text textAlign={"justify"}>PANTEK</Text>
              </NavLink>

              <Flex gap={5}>
                <Button onClick={handlelike}>
                  <AiOutlineHeart size={25} color={liked ? "red" : "gray"} />
                  <Text ml={2} color="gray">
                    {likes}
                  </Text>
                </Button>

                <Button bg="white">
                  <MdOutlineInsertComment size={25} color="gray" />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Box>
    </>
  );
};

export default ProfileDetailComp;
