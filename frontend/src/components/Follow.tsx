import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Follow() {
  return (
    <>
      <Box p={2} w={"100%"}>
        <Heading fontSize="23px" gap={2} mb={6}>
          Follow
        </Heading>
        <Flex justifyContent={"space-around"}>
          <Text
            _hover={{ cursor: "pointer", color: "gray" }}
            fontWeight={"500"}
          >
            Followers
          </Text>
          <Text
            _hover={{ cursor: "pointer", color: "gray" }}
            fontWeight={"500"}
          >
            Following
          </Text>
        </Flex>
      </Box>
    </>
  );
}
