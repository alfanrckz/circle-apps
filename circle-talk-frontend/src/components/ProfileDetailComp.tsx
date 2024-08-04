import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEditUser from "../features/edituser/component/ModalEditUser";
import { useProfile } from "../features/profile/hooks/useProfile";
import ThreadCard from "../features/thread/components/ThreadCard";
import { useThreads } from "../features/thread/hooks/useThreads";
import { IUser } from "../interface/user";
import { AUTH_CHECK } from "../stores/rootReducer";
import { RootState } from "../stores/types/rootState";

const ProfileDetailComp: React.FC = () => {
  const { threads } = useThreads();
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const { getProfileById } = useProfile();
  const profileById = useSelector((state: RootState) => state.profileId);
  const [dataProfile, setDataProfile] = useState<IUser | null>(null);

  useEffect(() => {
    const storeAuthData = localStorage.getItem("authData");
    if (storeAuthData) {
      const parsedAuthData = JSON.parse(storeAuthData);
      dispatch(AUTH_CHECK({ user: parsedAuthData }));
    }
  }, [dispatch]);

  useEffect(() => {
    getProfileById();
    if (profileById) {
      setDataProfile(profileById);
    }
  }, [profileById]);

  return (
    <>
      <Box
        mr={-5}
        color={"white"}
        h={"100vh"}
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
          "&::-webkit-scrollbar-thumb": { bg: "#478CCF" },
        }}
      >
        <Text ml={4} fontWeight={"bold"} fontSize={"2xl"} my={2}>
          Profile
        </Text>
        <Card
          mx={4}
          mb={2}
          p="5px"
          h="490px"
          bg={"mainBg.200"}
          color={"white"}
        >
          <Flex direction="column" alignItems="center" mx={2}>
            <Image
              src={
                dataProfile?.cover_photo
                  ? dataProfile.cover_photo
                  : "/placeholder-profile.jpg"
              }
              w={"100%"}
              h={"40%"}
              mt={5}
              borderRadius="10px"
            />
            <Flex justify="space-between" w="full" p={3}>
              <Image
                src={
                  dataProfile?.picture
                    ? dataProfile.picture
                    : "/placeholder-profile.jpg"
                }
                width="100px"
                height="100px"
                mt="-58px"
                borderRadius="50%"
                borderWidth={2}
                borderColor={"white"}
              />
              <Box textAlign={"center"}>
                <Text fontWeight={"bold"}>
                  {
                    threads?.filter(
                      (item: any) => item.user?.username === dataProfile?.username
                    ).length
                  }
                </Text>
                <Text>Thread</Text>
              </Box>
              <Box textAlign={"center"}>
                <Text fontWeight={"bold"}>{profileById?.followers_count}</Text>
                <Text>Follower</Text>
              </Box>
              <Box textAlign={"center"}>
                <Text fontWeight={"bold"}>{profileById?.followings_count}</Text>
                <Text>Following</Text>
              </Box>
              <ModalEditUser />
            </Flex>
            <Box ml={10} mb={1} textAlign={"left"} w={"100%"}>
              <Text
                textAlign={"left"}
                fontWeight="700"
                textTransform={"capitalize"}
                fontSize={20}
              >
                {dataProfile?.fullName}
              </Text>
              <Text
                color={"gray.400"}
                textAlign={"left"}
                fontSize="12px"
                fontWeight={"500"}
              >
                @{dataProfile?.username}
              </Text>
              <Text
                color={"gray.300"}
                textAlign={"justify"}
                fontSize="15px"
                fontWeight="600"
                paddingRight={"40px"}
              >
                {dataProfile?.bio}
              </Text>
            </Box>
          </Flex>
        </Card>
        {threads
          ?.filter((item) => item.user?.username === dataProfile?.username)
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
