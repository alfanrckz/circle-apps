import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const FormRegister = () => {
  const [handleChange, setHandleChange] = useState();
  return (
    <FormControl
      isRequired
      display={"flex"}
      flexDirection={"column"}
      gap={"3"}
      width={"300px"}
    >
      <Text color={"brand.green"} fontSize={"2xl"} fontWeight={"bold"}>
        Connect
      </Text>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Create Account Connect
      </Text>
      <Input
        placeholder="First name"
        name="full_name"
        onChange={handleChange}
      />
      <Input placeholder="Username" name="username" onChange={handleChange} />
      <Input placeholder="Email" name="email" onChange={handleChange} />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <Button backgroundColor={"green"} colorScheme="green" color={"white"}>
        Create
      </Button>
    </FormControl>
  );
};
