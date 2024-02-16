import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const SearchComp = () => {
  return (
    <>
      <Stack spacing={3} mt="10">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaUser color="gray.300" />}
          />
          <Input
            focusBorderColor="lime"
            placeholder="Here is a sample placeholder"
            borderRadius="20px" // Atur border-radius di sini
          />
        </InputGroup>
      </Stack>
    </>
  );
};

export default SearchComp;
