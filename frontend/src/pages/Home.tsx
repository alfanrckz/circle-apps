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
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { useThreads } from "../features/thread/hooks/useThreads";
import ThreadCard from "../features/thread/components/ThreadCard";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  const {
    handleChange,
    handlePost,
    fileInputRef,
    handleButtonClick,
    threads,
    form,
  } = useThreads();

  return (
    <Box>
      <Box m={4}>
        <Text fontWeight={"bold"} fontSize={"2xl"} my={2}>
          Home
        </Text>
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
                  value={form.content}
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
                  bg={"green"}
                  color={"white"}
                  ml={3}
                  borderRadius="10%"
                  value={"Post"}
                  type="submit"
                  _hover={{
                    // fontWeight: "bold",
                    // bg: "green.900",
                    borderColor: "white",
                  }}
                  onClick={(e: any) => handlePost(e)}
                >
                  Post
                </Button>
              </Flex>
            </form>
          </CardBody>
        </Card>
      </Box>
      {/* content */}
      <Box
        h={"80vh"}
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
          "&::-webkit-scrollbar-thumb": { bg: "green.500" },
        }}
      >
        {threads?.map((item: any) => {
          return (
            <ThreadCard
              // key={item.id}
              id={item.id}
              user={item?.user}
              content={item.content}
              created_at={item.created_at}
              image={item.image}
              likes={item.likes}
              replies={item.replies}
              is_liked={item.is_liked}
            />
          );
        })}
      </Box>
    </Box>
  );
}
