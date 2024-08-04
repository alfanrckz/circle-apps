import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IFollow } from "../../../interface/follow";
import { useFollow } from "../hooks/useFollow";
import { useState } from "react";

export const FollowCard = (props: IFollow) => {
  const isTrue = props.follow?.some((value) => value.follower.id === props.id);
  const [isFollow, setIsFollow] = useState(isTrue);
  const { follow, unfollow } = useFollow();

  return (
    <Box display={"flex"} width="100%" padding={"5px 0px"} gap={3}>
      <Image
        src={props.picture ?? "placeholder-profile.jpg"}
        borderRadius="100%"
        objectFit="cover"
        h={10}
        w={10}
        marginLeft={4}
        alt="user_profile_image"
        maxW={{ base: "100%", sm: "200px" }}
      />

      <Box display={"flex"} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} gap={2} flex={2}>
          <Box display={"flex"}>
            <Text textTransform={"capitalize"} fontWeight={"bold"}>
              {props.fullName}
            </Text>
          </Box>
          <Text color="grey" mt={-4} fontSize={15}>
            @{props.username}
          </Text>
          <Text></Text>
        </Box>
        <Box flex={1} display="flex" justifyContent={"flex-end"} mt={1}>
          {!isFollow ? (
            <Button
              border={"1px"}
              borderColor="grey"
              bg="main.bg.100"
              fontSize={12}
              textColor={"white"}
              _hover={{ bg: "main.bg.100" }}
              h={7}
              onClick={() => {
                follow(props.id), setIsFollow((prev) => !prev);
              }}
            >
              Follow
            </Button>
          ) : (
            <Button
              border={"1px"}
              borderColor="grey"
              bg="main.bg.100"
              fontSize={12}
              textColor={"white"}
              _hover={{ bg: "main.bg.100" }}
              h={7}
              onClick={() => {
                unfollow(props.id), setIsFollow((prev) => !prev);
              }}
            >
              Unfollow
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
