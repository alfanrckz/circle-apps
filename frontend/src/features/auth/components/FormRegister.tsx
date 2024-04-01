import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";

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
      <Text color={"green"} fontSize={"2xl"} fontWeight={"bold"}>
        Circle
      </Text>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"green"}>
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
        backgroundColor={"green"}
        colorScheme="green"
        color={"white"}
        onClick={handleRegister}
      >
        Create
      </Button>
    </FormControl>
  );
};
