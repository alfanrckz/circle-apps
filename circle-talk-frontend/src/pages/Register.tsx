import { Box, Text } from "@chakra-ui/react";
import { FormRegister } from "../features/auth/components/FormRegister";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg"

export const Register = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      <FormRegister />
      <Box display={"flex"} gap={2}>
        <Text>Already have account?</Text>
        <Link to={"/login"}>
          <Text color={"#478CCF"} cursor={"pointer"}>
            Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
