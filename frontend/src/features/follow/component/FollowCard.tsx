import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IFollow } from "../../../interface/follow";
import { useFollow } from "../hooks/useFollow";
import { useState } from "react";

export const FollowCard = (props: IFollow) => {
  const isTrue = props.follow?.some((value) => value.follower.id === props.id);
  const [isFollow, setIsFollow] = useState(isTrue);
  const { follow, unfollow } = useFollow();
  // const [following, setFollowing] = useState<IUser[]>([]);
  // const [follower, setFollower] = useState<IUser[]>([]);
console.log(isTrue, isFollow)
  // const dispatch = useDispatch();
  console.log("ini props cokk",props.follow, props.id);
  // console.log("ini isFollow ",isFollow);
  
  return (
    <Box display={"flex"} width="100%" padding={"20px 0px"}>
      <Image
        src={props.picture ?? "placeholder-profile.jpg"}
        width={"50px"}
        height={"50px"}
        objectFit={"cover"}
        borderRadius={"50%"}
        marginRight={"20px"}
        alt="user_profile_image"
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
        <Box flex={1} display="flex" justifyContent={"flex-end"}>
          {!isFollow ? (
            <Button
              onClick={() => {
                follow(props.id), setIsFollow((prev) => !prev);
              }}
            >
              follow
            </Button>
          ) : (
            <Button
              onClick={() => {
                unfollow(props.id), setIsFollow((prev) => !prev);
              }}
            >
              unfollow
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
