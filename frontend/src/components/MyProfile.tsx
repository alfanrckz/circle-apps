import {
  Box,
  Card,
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
  CardBody,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useEffect } from "react";
import { AUTH_CHECK } from "../stores/rootReducer";

export default function MyProfile() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log("ini auth broo", auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const storeAuthData = localStorage.getItem("authData");
    if (storeAuthData) {
      const parsedAuthData = JSON.parse(storeAuthData);
      dispatch(AUTH_CHECK({ user: parsedAuthData }));
    }
  }, [auth, dispatch]);

  return (
    <Box pos={"fixed"}>
      <Box m={4}>
        <Card bg="mainBg.200" borderRadius="lg">
          <Box m={4} color="gray.100">
            <Heading size="sm">My Profile</Heading>
            <Box my={3} mb={6} position="relative">
              <Image
                zIndex={1}
                borderColor="gray.200"
                objectFit="cover"
                borderRadius="md"
                h={14}
                w="100%"
                // maxW={{ base: "100%", sm: "200px" }}
                src="https://i.ibb.co/xmP2pS6/Profile.png"
                alt="cover_photo"
              />
              <Center>
                <Image
                  position="absolute"
                  zIndex={2}
                  border="2px"
                  borderColor="gray.200"
                  borderRadius="100%"
                  objectFit="cover"
                  h={14}
                  w={14}
                  left={2}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={auth.picture ? auth.picture : "/placeholder-profile.jpg"}
                  alt="avatar"
                />
              </Center>
              <Box pt={4}>
                <Button
                  colorScheme="teal"
                  size="xs"
                  borderRadius="md"
                  float={"right"}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>
            <Heading size="sm" mt={2} textTransform={"capitalize"}>
              ✨{auth.fullName}✨
            </Heading>
            <Text fontSize="xs" color={"gray.400"}>
              @{auth.username}
            </Text>
            <Text fontSize="sm" py={2}>
              Siksa Kubur Berat Broo
              {auth.bio}
            </Text>
            <Box>
              <Flex>
                <Box>
                  <Flex>
                    <Text fontSize="sm" py={2} as="b">
                      {auth.followings_count ?? 0}
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Following
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex pl={4}>
                    <Text fontSize="sm" py={2} as="b">
                      {auth.followers_count ?? 0}
                    </Text>
                    <Text fontSize="sm" py={2} pl={1}>
                      Followers
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* suggestion */}
      <Box m={4}>
        <Card color="gray.100" bg="mainBg.200">
          <Heading size="sm" mt={3} ml={3}>
            Suggested for you
          </Heading>
          {/* Suggest */}
          <Box mt={2} ml={1}>
            <Grid templateColumns="repeat(5, 1fr)" py={2} mx={3}>
              <GridItem colSpan={1}>
                <Image
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Text fontSize="xs" as="b" textAlign={["left", "center"]}>
                  Grock
                </Text>
                <Text fontSize="xs">@leminerale</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Center>
                  <Button borderRadius="50px">Follow</Button>
                </Center>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(5, 1fr)" py={2} mx={3}>
              <GridItem colSpan={1}>
                <Image
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Text fontSize="xs" as="b" textAlign={["left", "center"]}>
                  Zilong
                </Text>
                <Text fontSize="xs">@Zilong</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Center>
                  <Button borderRadius="50px">Follow</Button>
                </Center>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(5, 1fr)" py={2} mx={3}>
              <GridItem colSpan={1}>
                <Image
                  my={2}
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=740&t=st=1707272374~exp=1707272974~hmac=73cb9e234c24023a413b73e93e90cfbbdd56fcaab979c020d586ea086f1977b3"
                  alt="Caffe Latte"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Text fontSize="xs" as="b" textAlign={["left", "center"]}>
                  Luo Yi
                </Text>
                <Text fontSize="xs">@luoyi</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Center>
                  <Button borderRadius="50px">Follow</Button>
                </Center>
              </GridItem>
            </Grid>
          </Box>
        </Card>

        {/* footer */}
        <Card bg="#262626" mt="5">
          <CardBody
            display={"flex"}
            alignItems={"center"}
            gap={2}
            color="#EDF2F7"
          >
            <Text fontSize={"12px"} fontWeight={"bold"}>
              Developed by Alfansyuri Ziaulhaq
            </Text>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillFacebook />
            <AiFillInstagram />
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
