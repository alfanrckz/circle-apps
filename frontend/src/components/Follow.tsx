import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Follow() {
  return (
    <>
      <Heading mb={2}>Follow</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Followers</Tab>
          <Tab>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
