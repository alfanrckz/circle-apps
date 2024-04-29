import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import MenuBar from "../components/MenuBar";
import MyProfile from "../features/profile/component/MyProfile";
import { BottomBar } from "../components/BottomBar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <Grid h="100vh" templateColumns="repeat(10, 1fr)">
        <GridItem
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
          colSpan={{ base: 0, md: 2 }}
        >
          <MenuBar />
        </GridItem>
        <GridItem
          w="100%"
          h="100vh"
          bg="mainBg.100"
          colSpan={{ base: 10, md: 5 }}
        >
          {children}
        </GridItem>

        <GridItem
          colSpan={{ base: 0, md: 3 }}
          h={"100vh"}
          w="100%"
          bg="mainBg.100"
          display={{ base: "none", md: "block" }}
        >
          {/* <Profile /> */}
          <MyProfile />
        </GridItem >
        <GridItem display={{ base: "block", md: "none" }} w={"100%"} h={"10vh"} pos={"fixed"} bottom={0}>
          <BottomBar/>
        </GridItem>
      </Grid>
    </>
  );
}
