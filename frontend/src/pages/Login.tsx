import { Box } from "@chakra-ui/react";
import backgroundImage from "../assets/background.jpg"
import { FormLogin } from "../features/auth/components/FormLogin";

export default function Login() {
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
      <FormLogin />
    </Box>
  );
}
