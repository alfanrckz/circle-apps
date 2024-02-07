import {
  Box,
  Image,
  Card,
  CardBody,
  Flex,
  Input,
  Center,
  Button,
  Icon,
} from "@chakra-ui/react";

import { BiSolidImageAdd } from "react-icons/bi";
import postData from "../../../mocks/post.json";
import Contents from "../../../components/Contents";

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
                <label style={{ cursor: "pointer" }}>
                  <input name="image" type="file" hidden />
                  <Icon
                    mr={"10px"}
                    ml={"10px"}
                    color={"green"}
                    boxSize={8}
                    as={BiSolidImageAdd}
                  />
                </label>
              </Center>

              <Button colorScheme="green" ml={3} borderRadius="20%">
                Post
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* content */}
      {postData.map((post, index) => (
        <Contents
          key={index}
          profile_picture={post.profile_picture}
          profile_name={post.profile_name}
          username={post.username}
          content={post.content}
          image_content={post.image_content}
          count_like={post.count_like}
          count_replies={post.count_replies}
        />
      ))}
    </>
  );
}
