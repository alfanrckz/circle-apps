import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";
import { BsThreads } from "react-icons/bs";

export const FormRegister = () => {
  const { handleChange, handleRegister } = useRegister();
  return (
    <FormControl
      isRequired
      display={"flex"}
      flexDirection={"column"}
      gap={"3"}
      width={"300px"}
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
            Create Account Circle
          </Text>
      <Input placeholder="FullName" name="fullName" onChange={handleChange} />
      <Input placeholder="Username" name="username" onChange={handleChange} />
      <Input placeholder="Email" name="email" onChange={handleChange} />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <Button
        backgroundColor={"#478CCF"}
        colorScheme="#478CCF"
        color={"white"}
        onClick={handleRegister}
      >
        Create
      </Button>
    </FormControl>
  );
};
