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
  FormControl,
} from "@chakra-ui/react";

import { BiSolidImageAdd } from "react-icons/bi";
import ListContents from "./ListContent";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { useThreads } from "../features/thread/hooks/useThreads";
// import { any } from "joi";

export default function Content() {
  const auth = useSelector((state: RootState) => state.auth);
  const { handleChange, handlePost, fileInputRef, handleButtonClick, threads } =
    useThreads();
  // console.log(handleButtonClick);
  // console.log("ini threadss", threads);
  // console.log("ini handlepost", handlePost);

  // const sortedThreads = threads
  //   ?.slice()
  //   .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

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
            src={auth.picture ? auth.picture : "/placeholder-profile.jpg"}
            alt="Caffe Latte"
          />
          <CardBody>
            <form onSubmit={handleButtonClick} encType="multipart/form-data">
              <Flex color="white">
                <Input
                  placeholder="What's Happening?!"
                  size="lg"
                  marginX="auto"
                  border="none"
                  name="content"
                  onChange={handleChange}
                />
                <Center>
                  <label style={{ cursor: "pointer" }}>
                    <Input
                      name="image"
                      type="file"
                      hidden
                      onChange={handleChange}
                      ref={fileInputRef}
                    />
                    <Icon
                      mr={"10px"}
                      ml={"10px"}
                      color={"green"}
                      boxSize={8}
                      as={BiSolidImageAdd}
                    />
                  </label>
                </Center>

                <Button
                  colorScheme="green"
                  ml={3}
                  borderRadius="20%"
                  value={"Post"}
                  onClick={handlePost}
                >
                  submit
                </Button>
              </Flex>
            </form>
          </CardBody>
        </Card>
      </Box>
      {/* content */}
      {threads?.map((item) => {
        return (
          <ListContents
            key={item.id}
            id={item.id}
            user={item?.user}
            content={item.content}
            created_at={item.created_at}
            image={item.image}
            count_like={item.count_like}
            count_replies={item.count_replies}
            is_liked={item.is_liked}
          />
        );
      })}
    </>
  );
}
