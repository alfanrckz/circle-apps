import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { useState } from "react";
import { IThreadCard } from "../../../interface/thread";
import { useNavigate } from "react-router-dom";
import { useThreadCard } from "../../../features/thread/hooks/useThreadCard";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function ThreadCard(props: IThreadCard) {
  // console.log("ini props", props);

  const navigate = useNavigate();
  const { handlePostLike } = useThreadCard();
  const [liked, setLiked] = useState(false);
  const [replies, setReplies] = useState(false);

  const switchLike = () => {
    setLiked(!liked);
  };

  return (
    <Box m={4} key={props.id}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg="mainBg.200"
        borderColor="mainBg.200"
        border="px"
        color="grey.200"
      >
        <Image
          borderRadius="100%"
          objectFit="cover"
          h={14}
          w={14}
          marginLeft={4}
          marginTop={4}
          maxW={{ base: "100%", sm: "200px" }}
          src={props.user?.picture ?? "/placeholder-profile.jpg"}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Box>
              <Flex>
                <Text textTransform={"capitalize"} size="md">
                  {props.user?.fullName}
                </Text>
                <Text ml={2} color="gray.400">
                  {props.created_at &&
                    formatDistanceToNow(parseISO(props.created_at), {
                      addSuffix: true,
                      includeSeconds: true,
                    })}
                </Text>
              </Flex>
              <Text pt="1" color="gray.400">
                @{props.user?.username}
              </Text>
            </Box>
            <Text py="2">{props.content}</Text>
            <Image src={props.image} borderRadius={10} />
            <Flex pt="2">
              <Icon
                as={FaHeart}
                cursor="pointer"
                onClick={switchLike}
                color={liked ? "red.500" : "inherit"}
              />

              <Text fontSize="10" ml="1" mr="2">
                {props.count_like}
              </Text>
              <LiaCommentSolid cursor="pointer" />
              <Text fontSize="10">{props.count_replies}</Text>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
