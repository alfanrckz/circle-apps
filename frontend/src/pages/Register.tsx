import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { FormRegister } from "../features/auth/components/FormRegister";

export const Register = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"60px"}
      ml={550}
    >
      <FormRegister />
      <Box display={"flex"} gap={2}>
        <Text>Already have account?</Text>
        <Link>
          <Text color={"brand.green"} cursor={"pointer"}>
            Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
