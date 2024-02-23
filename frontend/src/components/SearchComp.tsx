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
            placeholder="look for people around you"
            borderRadius="20px"
          />
        </InputGroup>
      </Stack>
    </>
  );
};

export default SearchComp;
