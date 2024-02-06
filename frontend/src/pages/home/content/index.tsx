import {
  Heading,
  Box,
  Image,
  Card,
  Text,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Stack,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { BiSolidImageAdd } from "react-icons/bi";
import postData from "../../../mocks/post.json";

interface PostData {
  profile_name: string;
  profile_picture: string;
  username: string;
  count_post: string;
  content: string;
  count_like: number;
  count_replies: number;
}

export default function MainContent() {
  return (
    <>
      <Box m={4}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="mainBg.200"
          borderColor="main.Bg.200"
          border="1px"
        >
          <Image
            borderRadius="100%"
            objectFit="cover"
            h={14}
            w={14}
            marginLeft={4}
            marginTop={4}
            maxW={{ base: "100%", sm: "200px" }}
            src="https://img.freepik.com/premium-photo/band-performs-stage-rock-music-concert-warning-authentic-shooting-with-high-iso-challenging-lighting-conditions-little-bit-grain-blurred-motion-effects_564276-1036.jpg?size=626&ext=jpg"
            alt="Caffe Latte"
          />
          <CardBody>
            <Flex color="white">
              <Input
                placeholder="What's Happening?!"
                size="lg"
                marginX="auto"
                border="none"
              />
              <Center>
                <BiSolidImageAdd />
                <Button colorScheme="green" ml={3} borderRadius="20%">
                  post
                </Button>
              </Center>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* content */}
      {postData.map((post, index) => (
        <Box key={index} m={4}>
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
              src={post.profile_picture}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Box>
                  <Heading size="md">{post.profile_name}</Heading>
                  <Text pt="1" color="gray.400">
                    @{post.username}
                  </Text>
                </Box>
                <Text py="2">{post.content}</Text>
                <Flex pt="2">
                  <FaHeart />
                  <Text fontSize="10" ml="1" mr="2">
                    {post.count_like}
                  </Text>
                  <LiaCommentSolid cursor="pointer" />
                  <Text fontSize="10">{post.count_replies}</Text>
                </Flex>
              </CardBody>
            </Stack>
          </Card>
        </Box>
      ))}
    </>
  );
}
