import { Grid, GridItem } from "@chakra-ui/react";

import ProfileSuggest from "../features/profile/component/MyProfile";
import SideNavbar from "../components/MenuBar";

export default function Follow() {
  return (
    <div>
      <Grid h="100%" templateColumns="repeat(10, 1fr)">
        <GridItem
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
          colSpan={{ base: 0, md: 2 }}
        >
          <SideNavbar />
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          bg="mainBg.100"
          colSpan={{ base: 10, md: 5 }}
        >
          <Follow />
        </GridItem>
        <GridItem
          colSpan={{ base: 0, md: 3 }}
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
        >
          <ProfileSuggest />
        </GridItem>
      </Grid>
    </div>
  );
}
