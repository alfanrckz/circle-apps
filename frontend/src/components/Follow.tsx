import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export default function Follow() {
  return (
    <>
      <Tabs
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
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
