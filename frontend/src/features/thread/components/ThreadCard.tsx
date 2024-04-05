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
import { useState } from "react";

export default function ThreadCard(props: IThreadCard) {
  const navigate = useNavigate();
  const isTrue = props.likes?.some((val) => val.user.id === props.profile);
  const { handlePostLike } = useThreadCard();
  const [isLiked, setIsLike] = useState(isTrue);
  const [likeCount, setLikeCount] = useState(props.likes?.length);
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
                <Text ml={2} color="grey" fontSize={15}>
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
              >
                {isLiked ? (
                  <FaRegHeart
                    color="red"
                    cursor={"pointer"}
                    onClick={() => {
                      handlePostLike(props.id!);
                      setLikeCount((prev) => prev! - 1);
                      setIsLike(false);
                    }}
                  />
                ) : (
                  <FaRegHeart
                    onClick={() => {
                      handlePostLike(props.id!);
                      setLikeCount((prev) => prev! + 1);
                      setIsLike(true);
                    }}
                    cursor={"pointer"}
                  />
                )}
              </Text>

              <Text fontSize="12" ml="1" mr="2" mt={1}>
                {likeCount}
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
