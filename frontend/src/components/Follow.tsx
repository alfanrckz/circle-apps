import {
  Box,
  Card,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FollowCard } from "../features/follow/component/FollowCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { API } from "../libs/api";
import { useEffect } from "react";
import { GET_FOLLOW } from "../stores/slices/followSlice";

export default function Follow() {
  const dispatch = useDispatch();
  const follower = useSelector((state: RootState) => state.follow.follower);
  const following = useSelector((state: RootState) => state.follow.following);
  const profile = useSelector((state: RootState) => state.profile);

  async function getFollowData() {
    const response = await API.get("/follow", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(GET_FOLLOW(response.data));
  }

  useEffect(() => {
    getFollowData();
  }, []);

  if (profile.id === 0) return null;

  return (
    <Box h={"89vh"} color={"white"} mt={4} mr={-4} >
      <Text ml={4} fontWeight={"bold"} fontSize={"2xl"} my={2}>
        Follow
      </Text>
      <Card mx={4} mb={2} p="5px" h="100%" bg={"mainBg.200"} color={"white"}>
        <Tabs
          size={"md"}
        >
          <TabList>
            <Tab w={"50%"}>Followers</Tab>
            <Tab w={"50%"}>Followings</Tab>
          </TabList>
          <TabPanels
            h={"80vh"}
            overflowY={"auto"}
            sx={{
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
              "&::-webkit-scrollbar-thumb": { bg: "green.500" },
            }}
          >
            <TabPanel>
              {follower &&
                follower.map((follow, index) => (
                  <FollowCard
                    key={index}
                    id={follow.id}
                    user_id={follow.user_id}
                    fullName={follow.fullName}
                    username={follow.username}
                    email={follow.email}
                    picture={follow.picture}
                    description={follow.description}
                    follow={profile.followings_count}
                  />
                ))}
            </TabPanel>
            <TabPanel>
              {following &&
                following.map((follow, index) => (
                  <FollowCard
                    key={index}
                    id={follow.id}
                    user_id={follow.user_id}
                    fullName={follow.fullName}
                    username={follow.username}
                    email={follow.email}
                    picture={follow.picture}
                    description={follow.description}
                    follow={profile.followings_count}
                  />
                ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
}
