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
import { Ithreads } from "../interface/IThreads";
import { useState } from "react";

export default function Contents(props: Ithreads) {
  const {
    profile_picture,
    profile_name,
    username,
    content,
    image_content,
    count_like,
    count_replies,
  } = props;

  const [liked, setLiked] = useState(false);
  const [replies, setReplies] = useState(false);

  const switchLike = () => {
    setLiked(!liked);
  };

  const switchReplies = () => {
    setReplies(!replies);
  };

  return (
    <Box m={4}>
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
          src={profile_picture}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Box>
              <Heading size="md">{profile_name}</Heading>
              <Text pt="1" color="gray.400">
                @{username}
              </Text>
            </Box>
            <Text py="2">{content}</Text>
            <Image src={image_content} borderRadius={10} />
            <Flex pt="2">
              <Icon
                as={FaHeart}
                cursor="pointer"
                onClick={switchLike}
                color={liked ? "red.500" : "inherit"}
              />

              <Text fontSize="10" ml="1" mr="2">
                {count_like}
              </Text>
              <LiaCommentSolid cursor="pointer" />
              <Text fontSize="10">{count_replies}</Text>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
