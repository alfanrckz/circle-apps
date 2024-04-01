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
import { useEffect } from "react";
import { useThreadReply } from "../hooks/useThreadReply";
import { formatDistanceToNow, parseISO } from "date-fns";

export const ThreadDetailCard = () => {
  const navigate = useNavigate();
  const { getThread, thread } = useThreads();
  const {
    getReplies,
    fileInputRefReply,
    handlePostReply,
    handleChangeReply,
    handleButtonClickReply,
    formReply,
  } = useThreadReply();

  useEffect(() => {
    getThread();
  }, [getReplies]);

  // console.log("getReplies terbaru", getReplies);

  return (
    <Box
      h={"100vh"}
      overflowY={"auto"}
      overflowX="hidden"
      sx={{
        "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
        "&::-webkit-scrollbar-thumb": { bg: "green.500" },
      }}
    >
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

      <Box>
        <ThreadCard
          key={thread?.id}
          id={thread?.id!}
          user={thread?.user!}
          content={thread?.content!}
          created_at={thread?.created_at!}
          image={thread?.image!}
          likes={thread?.likes!}
          replies={thread?.replies!}
          profile={thread?.profile!}
        />
      </Box>

      {/* form-reply */}
      <Box mx={4}>
        <Card
          h={70}
          direction={{ base: "column", sm: "row" }}
          overflowX="hidden"
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
                    // bg: "green.900",
                    borderColor: "white",
                  }}
                >
                  Reply
                </Button>
              </Flex>
            </form>
          </CardBody>
        </Card>

        <Box ml={4} mt={5} h={"100vh"}>
          {getReplies?.length === 0 ? (
            <Text
              display={"flex"}
              justifyContent={"center"}
              fontWeight={"bold"}
            >
              No Comment yet..
            </Text>
          ) : (
            getReplies &&
            Array.isArray(getReplies) &&
            getReplies.map((reply) => (
              <Box
                key={reply.id}
                display={"flex"}
                width="500px"
                borderBottom={"1px solid white"}
                padding={"20px 0px"}
                bg={"transparent"}
                color={"white"}
              >
                <Image
                  src={
                    reply?.user?.profile_picture ?? "/placeholder-profile.jpg"
                  }
                  width={"30px"}
                  height={"30px"}
                  objectFit={"cover"}
                  borderRadius={"50%"}
                  marginRight={"20px"}
                />
                <Box>
                  <Box display={"flex"}>
                    <Text textTransform={"capitalize"}>
                      {reply?.user?.fullName}
                    </Text>
                    <Text ml={1} mt={1} fontSize={"sm"} color="grey">
                      @{reply?.user?.username}
                    </Text>
                    <Text ml={3} color="grey">
                      {reply.created_at &&
                        formatDistanceToNow(parseISO(reply.created_at), {
                          addSuffix: true,
                          includeSeconds: true,
                        })}
                    </Text>
                  </Box>
                  {reply?.content && <Text>{reply?.content}</Text>}
                  {reply?.image && (
                    <Image
                      mt={3}
                      src={reply?.image}
                      width={"400px"}
                      height={"300px"}
                      objectFit={"contain"}
                      marginRight={"20px"}
                    />
                  )}
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};
