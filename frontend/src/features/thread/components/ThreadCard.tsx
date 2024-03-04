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

import { FaHeart, FaShare } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { IThreadCard } from "../../../interface/thread";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useThreadCard } from "../hooks/useThreadCard";
import { useEffect, useState } from "react";

export default function ThreadCard(props: IThreadCard) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { handlePostLike } = useThreadCard();

  const [liked, setLiked] = useState<boolean>(() => {
    // Membaca status like dari local storage saat komponen dimuat
    const likedFromStorage = localStorage.getItem(`thread_${props.id}_liked`);
    return likedFromStorage
      ? JSON.parse(likedFromStorage)
      : props.is_liked || false;
  });

  const [likeCount, setLikeCount] = useState<number>(props.count_like ?? 1);

  useEffect(() => {
    // Menyimpan status like ke dalam local storage setelah perubahan
    localStorage.setItem(`thread_${props.id}_liked`, JSON.stringify(liked));
  }, [props.id, liked]);

  const handleLikeClick = () => {
    if (props.id) {
      handlePostLike(props.id, !liked);
      setLiked(!liked);
      setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
    }
  };

  return (
    <Box m={4} key={props.id}>
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
                <Text textTransform={"capitalize"} size="md">
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
              <Icon
                as={FaHeart}
                cursor="pointer"
                // onClick={() =>
                //   props.id && handlePostLike(props.id, props.is_liked)
                // }
                onClick={handleLikeClick}
                color={liked ? "red.500" : "brand.grey"}
                // color={props.is_liked ? "brand.grey" : "red.500"}
              />

              <Text fontSize="10" ml="1" mr="2">
                {likeCount}
              </Text>

              <LiaCommentSolid
                cursor="pointer"
                onClick={() => navigate(`/thread-detail/${props.id}`)}
              />

              <Text ml="2" fontSize="10">
                {props.count_replies}
              </Text>
              <Icon as={FaShare} cursor="pointer" ml={3} />
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
