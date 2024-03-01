import React, { useEffect, useState } from "react";
// Chakra imports
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { AUTH_CHECK } from "../stores/rootReducer";

import ThreadCard from "../features/thread/components/ThreadCard";
import { useThreads } from "../features/thread/hooks/useThreads";

const ProfileDetailComp: React.FC = () => {
  const { handleChange, handlePost, fileInputRef, handleButtonClick, threads } =
    useThreads();
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
      <Box
        color={"white"}
        mt={4}
        h={"100vh"}
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
          "&::-webkit-scrollbar-thumb": { bg: "green.500" },
        }}
      >
        <Card mx={4} mb={2} p="5px" h="330px" bg={"mainBg.200"} color={"white"}>
          <Text fontWeight="500" my={2} mx={4}>
            Profile
          </Text>
          <Flex direction="column" alignItems="center" mx={2}>
            <Image
              src="https://png.pngtree.com/background/20220724/original/pngtree-ackground-hijau-keren-dan-kosong-abstract-untuk-wallpaper-template-desain-ppt-picture-image_1741397.jpg"
              // maxW='100%'
              w={"100%"}
              h={"20%"}
              borderRadius="10px"
            />
            <Flex justify="space-between" w="full" p={3}>
              <Image
                src={auth.picture ? auth.picture : "/placeholder-profile.jpg"}
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

        {threads
          ?.filter((item) => item.user?.username === auth.username)
          .map((item) => {
            return (
              <ThreadCard
                key={item.id}
                id={item.id}
                user={item?.user}
                content={item.content}
                created_at={item.created_at}
                image={item.image}
                count_like={item.count_like}
                count_replies={item.count_replies}
                is_liked={item.is_liked}
              />
            );
          })}

        {/* <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="mainBg.200"
          border="5px"
          color="grey.200"
          mx={2}
          mb={2}
          p="5px"
        >
          <Image
            borderRadius="100%"
            objectFit="cover"
            h={14}
            w={14}
            marginLeft={4}
            marginTop={4}
            maxW={{ base: "100%", sm: "200px" }}
            alt="picture"
          />
          <Stack>
            <CardBody>
              <Box>
                <Flex>
                  <Text textTransform={"capitalize"} size="md"></Text>
                  <Text ml={2} color="gray.400"></Text>
                </Flex>
                <Text pt="1" color="gray.400"></Text>
              </Box>
              <Text py="2"></Text>
              <Image borderRadius={10} />
              <Flex pt="2">
                <Icon
                  as={FaHeart}
                  cursor="pointer"
                  // onClick={switchLike}
                  color={liked ? "red.500" : "inherit"}
                />

                <Text fontSize="10" ml="1" mr="2"></Text>

                <LiaCommentSolid cursor="pointer" />

                <Text fontSize="10"></Text>
              </Flex>
            </CardBody>
          </Stack>
        </Card> */}
      </Box>
    </>
  );
};

export default ProfileDetailComp;
