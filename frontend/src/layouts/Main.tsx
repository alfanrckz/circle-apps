import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyProfile from "../components/MyProfile";
import MenuBar from "../components/MenuBar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <Grid h="100%" templateColumns="repeat(10, 1fr)" >
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
        </GridItem>
      </Grid>
    </>
  );
}
