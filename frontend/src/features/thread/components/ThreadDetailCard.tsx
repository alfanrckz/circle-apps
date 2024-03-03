import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import ThreadCard from "./ThreadCard";
import { useThreads } from "../hooks/useThreads";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BiSolidImageAdd } from "react-icons/bi";
// import { useThreadDetail } from "../hooks/useThreadDetail";
// import { useThreadReply } from "../hooks/useThreadReply";
import { useEffect } from "react";
import { useThreadReply } from "../hooks/useThreadReply";

export const ThreadDetailCard = () => {
  const navigate = useNavigate();
  const { getThread, thread } = useThreads();
  // const { thread, handlePost, handleChange, replies } = useThreadDetail();

  // const authData: any = localStorage.getItem("authData");

  const {
    getReplies,
    handlePostReply,
    handleChangeReply,
    handleButtonClickReply,
    fileInputRefReply,
    formReply,
  } = useThreadReply();

  useEffect(() => {
    getThread();
  }, []);

  return (
    <Box h={"100vh"}>
      <Box ml={5} display={"flex"} mt={5}>
        <Text
          mt={7}
          fontSize={"2xl"}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <FaLongArrowAltLeft />
        </Text>
        <Text fontWeight={"bold"} fontSize={"2xl"} mt={5} ml={2}>
          Status
        </Text>
      </Box>

      <Box
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
          "&::-webkit-scrollbar-thumb": { bg: "green.500" },
        }}
      >
        <ThreadCard
          key={thread?.id}
          id={thread?.id}
          user={thread?.user}
          content={thread?.content}
          created_at={thread?.created_at}
          image={thread?.image}
          count_like={thread?.count_like}
          count_replies={thread?.count_replies}
          is_liked={thread?.is_liked}
        />
      </Box>

      {/* form-reply */}
      <Box mx={4}>
        <Card
          h={70}
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
            h={8}
            w={8}
            marginLeft={4}
            marginTop={4}
            maxW={{ base: "100%", sm: "200px" }}
            src={"/placeholder-profile.jpg"}
            alt="picture"
          />
          <CardBody>
            <form onSubmit={handlePostReply} encType="multipart/form-data">
              <Flex color="white">
                <Input
                  mt={-1}
                  placeholder="type your reply"
                  size="sm"
                  marginX="auto"
                  border="none"
                  name="content"
                  onChange={handleChangeReply}
                  value={formReply.content}
                  // onChange={handleChange}
                />
                <Center>
                  <label style={{ cursor: "pointer" }}>
                    <Input
                      name="image"
                      type="file"
                      hidden
                      onClick={handleButtonClickReply}
                      // onChange={handleChange}
                      ref={fileInputRefReply}
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
                  size="sm"
                  bg={"green"}
                  ml={3}
                  borderRadius="10%"
                  value={"Post"}
                  type="submit"
                  colorScheme="green"
                  _hover={{
                    // fontWeight: "bold",
                    bg: "green.900",
                  }}
                  // onClick={(e: any) => handlePost(e)}
                >
                  Reply
                </Button>
              </Flex>
            </form>
          </CardBody>
        </Card>
      </Box>
      <Box>
        {getReplies?.length === 0 ? (
          <Text color={"red"}>No Comment yet</Text>
        ) : (
          getReplies &&
          Array.isArray(getReplies) &&
          getReplies.map((data: any) => {
            return (
              <Box
                display={"flex"}
                width="500px"
                borderBottom={"1px solid white"}
                padding={"20px 0px"}
                bg={"transparent"}
                color={"white"}
                key={data.id}
              >
                <Image
                  src={data?.user?.profile_picture}
                  width={"50px"}
                  height={"50px"}
                  objectFit={"cover"}
                  borderRadius={"50%"}
                  marginRight={"20px"}
                />
                <Box>
                  <Box display={"flex"}>
                    <Text>{data?.user?.full_name}</Text>
                    <Text ms={2} color="grey">
                      @{data?.user?.username}
                    </Text>
                  </Box>

                  {data?.content && <Text>{data?.content}</Text>}

                  {data?.image && (
                    <Image
                      mt={3}
                      src={data?.image}
                      width={"400px"}
                      height={"300px"}
                      objectFit={"contain"}
                      marginRight={"20px"}
                    />
                  )}
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};
