import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { BsThreads } from "react-icons/bs";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { handleChange, handleLogin } = useLogin();
  return (
    <>
    
      <Box>
        <FormControl
          isRequired
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          width={"320px"}
          p={4}
        >
          <Flex gap={1}>
            <Text color={"#478CCF"} fontSize={"2xl"} fontWeight={"bold"}>
              Circle
            </Text>
            <Text fontSize={20} color={"#478CCF"} mt={2}>
              <BsThreads />
            </Text>
          </Flex>

          <Text mt={-3} fontSize={"2xl"} fontWeight={"bold"} color={"#478CCF"}>
            Login Circle
          </Text>
          <Input placeholder="Email" name="email" onChange={handleChange} />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Box display="flex" justifyContent={"flex-end"}>
            <Text>Forgot password?</Text>
          </Box>
          <Button
            backgroundColor={"#478CCF"}
            colorScheme="#478CCF"
            color={"white"}
            onClick={handleLogin}
          >
            Login
          </Button>
        </FormControl>
        <Box display={"flex"} gap={2} fontSize={"sm"} justifyContent={"center"}>
          <Text>Don't have an account yet?</Text>
          <Link to={"/register"}>
            <Text color={"brand.#478CCF"} cursor={"pointer"}>
              Create account
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};
