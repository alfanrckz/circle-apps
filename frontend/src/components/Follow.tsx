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

export default function Follow() {
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
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
}
