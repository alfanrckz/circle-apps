import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";

export interface ContentSpaceProps {
  profile_picture: string;
  profile_name: string;
  username: string;
  content: string;
  count_like: number;
  count_replies: number;
}
export default function Contents(props: ContentSpaceProps) {
  const {
    profile_picture,
    profile_name,
    username,
    content,
    count_like,
    count_replies,
  } = props;
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
            <Flex pt="2">
              <FaHeart />
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
