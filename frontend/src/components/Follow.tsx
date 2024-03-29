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
import { FollowCard } from "../features/follow/FollowCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { API } from "../libs/api";
import { GET_FOLLOWS } from "../stores/rootReducer";


export default function Follow() {
  const dispatch = useDispatch()
  const followState = useSelector((state: RootState) => state.follow.followState);
  const follows = useSelector((state: RootState) => state.follow.follows ) 

  async function getFollowData() {
    const response = await API.get(`/follows?type=${followState}`)
    dispatch(GET_FOLLOWS(response.data))
  }
  return (
    <Box h={"97vh"} color={"white"} mt={4}>
      <Text ml={4} fontWeight={"bold"} fontSize={"2xl"} my={2}>
        Follow
      </Text>
      <Card mx={4} mb={2} p="5px" h="100%" bg={"mainBg.200"} color={"white"}>
        <Tabs
          px={5}
          borderColor={"black"}
          isFitted
          width={"100%"}
          marginTop={"20px"}
          variant="enclosed"
        >
          <TabList mb={"1em"} borderColor={"black"}>
            <Tab>Followers</Tab>
            <Tab>Followings</Tab>
          </TabList>
          <TabPanels
            h={"60vh"}
            overflowY={"auto"}
            sx={{
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
              "&::-webkit-scrollbar-thumb": { bg: "green.500" },
            }}
          >
            <TabPanel>
              {follow.map(follow, index) => (

              <FollowCard />
              )}
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
}
