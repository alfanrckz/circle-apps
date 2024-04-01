import {
  Box,
  Card,
  CardBody,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IThreadCard } from "../../../interface/thread";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useThreadCard } from "../hooks/useThreadCard";

export default function ThreadCard(props: IThreadCard) {
  // console.log(props)
  const navigate = useNavigate();
  const { handlePostLike } = useThreadCard();

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
          h={8}
          w={8}
          marginLeft={4}
          marginTop={6}
          maxW={{ base: "100%", sm: "200px" }}
          src={props.user?.picture ?? "/placeholder-profile.jpg"}
          alt="picture"
        />
        <Stack ml={-2}>
          <CardBody>
            <Box>
              <Flex>
                <Text
                  textTransform={"capitalize"}
                  size="md"
                  fontWeight={"bold"}
                >
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
              <Text fontSize={12} mt={-1} color="gray.400">
                @{props.user?.username}
              </Text>
            </Box>
            <Text py="2">{props.content}</Text>
            <Image src={props.image} borderRadius={10} />
            <Flex pt="2">
              <Text
                fontSize={18}
                ml={1}
                mt={1}
                // onClick={handleLikeClick}
                // color={liked ? "red.500" : "brand.grey"}
              >
                <FaRegHeart
                  color={props.is_liked ? " red.500 " : "brand.grey"}
                  onClick={() =>
                    props.id && handlePostLike(props.id, !!props.is_liked)
                  }
                  cursor={"pointer"}
                />
              </Text>

              <Text fontSize="12" ml="1" mr="2" mt={1}>
                {props.likes?.length}
              </Text>
              <Text fontSize={20} ml={1} mt={1}>
                <BiCommentDetail
                  cursor="pointer"
                  onClick={() => navigate(`/thread-detail/${props.id}`)}
                />
              </Text>

              <Text ml="1" mt={1} fontSize="12">
                {props.replies?.length} Replies
              </Text>
              <Icon as={FaShare} cursor="pointer" ml={3} mt={1} />
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
