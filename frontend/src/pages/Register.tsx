import { Box, Text } from "@chakra-ui/react";
import { FormRegister } from "../features/auth/components/FormRegister";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"60px"}
    >
      <FormRegister />
      <Box display={"flex"} gap={2}>
        <Text>Already have account?</Text>
        <Link to={"/login"}>
          <Text color={"brand.green"} cursor={"pointer"}>
            Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
