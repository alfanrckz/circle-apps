import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { BsThreads } from "react-icons/bs";
import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
  const { handleChange, handleLogin } = useLogin();
  return (
    <>
      <FormControl
        isRequired
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        width={"300px"}
      >
        <Flex gap={1}>
          <Text color={"green"} fontSize={"2xl"} fontWeight={"bold"}>
            Circle
          </Text>
          <Text fontSize={20} color={"green"} mt={2}>
            <BsThreads />
          </Text>
        </Flex>

        <Text fontSize={"2xl"} fontWeight={"bold"} color={"green"}>
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
          backgroundColor={"green"}
          colorScheme="green"
          color={"white"}
          onClick={handleLogin}
        >
          Login
        </Button>
      </FormControl>
    </>
  );
};
