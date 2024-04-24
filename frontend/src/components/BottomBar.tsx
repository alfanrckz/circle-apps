import { Box, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { GoHeartFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../stores/types/rootState";

export const BottomBar = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <Box
      width={"100%"}
      height={"10vh"}
      bg={"mainBg.200"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <NavLink
        to={"/"}
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "green" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        <Text fontSize="4xl">
          <IoMdHome />
        </Text>
      </NavLink>

      <NavLink
        to={"/search"}
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "green" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        <Text fontSize="4xl">
          <MdOutlinePersonSearch />
        </Text>
      </NavLink>

      <NavLink
        to={"/follow"}
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "green" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        <Text fontSize="4xl">
          <GoHeartFill />
        </Text>
      </NavLink>

      <NavLink
        onClick={() => localStorage.setItem("id", JSON.stringify(profile.id))}
        to={`/detail-profile/${profile.id}`}
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "green" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        <Text fontSize="4xl">
          <CgProfile />
        </Text>
      </NavLink>
    </Box>
  );
};
