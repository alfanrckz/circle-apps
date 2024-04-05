import React, { useEffect } from "react";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_CHECK } from "../stores/rootReducer";
import { RootState } from "../stores/types/rootState";

import ThreadCard from "../features/thread/components/ThreadCard";
import { useThreads } from "../features/thread/hooks/useThreads";
import ModalEditUser from "../features/edituser/component/ModalEditUser";

const ProfileDetailComp: React.FC = () => {
  const { threads } = useThreads();
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const storeAuthData = localStorage.getItem("authData");
    if (storeAuthData) {
      const parsedAuthData = JSON.parse(storeAuthData);
      dispatch(AUTH_CHECK({ user: parsedAuthData }));
    }
  }, [dispatch, profile]);

  return (
    <>
      <Box
        mr={-5}
        color={"white"}
        h={"100vh"}
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
          "&::-webkit-scrollbar-thumb": { bg: "green.500" },
        }}
      >
        <Text ml={4} fontWeight={"bold"} fontSize={"2xl"} my={2}>
          Profile
        </Text>
        <Card mx={4} mb={2} p="5px" h="430px" bg={"mainBg.200"} color={"white"}>
          <Flex direction="column" alignItems="center" mx={2}>
            <Image
              src={
                profile.cover_photo
                  ? profile.cover_photo
                  : "https://png.pngtree.com/background/20220724/original/pngtree-ackground-hijau-keren-dan-kosong-abstract-untuk-wallpaper-template-desain-ppt-picture-image_1741397.jpg"
              }
              // maxW='100%'
              w={"100%"}
              h={"40%"}
              mt={5}
              borderRadius="10px"
            />
            <Flex justify="space-between" w="full" p={3}>
              <Image
                src={
                  profile.picture ? profile.picture : "/placeholder-profile.jpg"
                }
                width="100px"
                height="100px"
                mt="-58px"
                borderRadius="50%"
                borderWidth={2}
                borderColor={"white"}
              />
              <Text textAlign={"center"}>
                {
                  threads?.filter(
                    (item) => item.user?.username === profile.username
                  ).length
                }
                <Text>Thread</Text>
              </Text>
              <Text textAlign={"center"}>
                {profile.followers_count?.length}
                <Text>Follower</Text>
              </Text>
              <Text textAlign={"center"}>
                {profile.followings_count?.length}
                <Text>Following</Text>
              </Text>

              <ModalEditUser />
            </Flex>
            <Box ml={10} mb={1} textAlign={"left"} w={"100%"}>
              <Text
                textAlign={"left"}
                fontWeight="700"
                textTransform={"capitalize"}
                fontSize={20}
              >
                {profile.fullName}
              </Text>
              <Text
                color={"gray.400"}
                textAlign={"left"}
                fontSize="12px"
                fontWeight={"500"}
              >
                @{profile.username}
              </Text>
 

              <Text
                color={"gray.300"}
                textAlign={"justify"}
                fontSize="15px"
                fontWeight="600"
                paddingRight={"40px"}
                >
                {profile.bio}
              </Text>
       
            </Box>
          </Flex>
        </Card>

        {threads
          ?.filter((item) => item.user?.username === profile.username)
          .map((item) => {
            return (
              <ThreadCard
                key={item.id}
                id={item.id}
                user={item?.user}
                content={item.content}
                created_at={item.created_at}
                image={item.image}
                likes={item.likes}
                replies={item.replies}
                profile={profile.id}
              />
            );
          })}
      </Box>
    </>
  );
};

export default ProfileDetailComp;
