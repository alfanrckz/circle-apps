import {
  Button,
  FormControl,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { useThreads } from "../features/thread/hooks/useThreads";
import { BiSolidImageAdd } from "react-icons/bi";

export default function PostModal() {
  const auth = useSelector((state: RootState) => state.profile);
  const {
    handleChange,
    handlePost,
    fileInputRef,
    handleButtonClick,
    form,
  } = useThreads();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  if (auth.id === 0) return null;
  return (
    <>
      <Button
        textColor={"white"}
        bg={"green"}
        mt={8}
        w={"100%"}
        rounded={"full"}
        onClick={onOpen}
        _hover={{ borderColor: "white", borderWidth: 2 }}
      >
        Create Post
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"mainBg.100"}>
          <ModalCloseButton />

            <form onSubmit={handleButtonClick} encType="multipart/form-data">
          <ModalBody pb={6}>
              <FormControl mt={10} display={"flex"} gap={2}>
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  h={12}
                  w={12}
                  src={auth.picture ? auth.picture : "/placeholder-profile.jpg"}
                  alt="picture"
                  mt={-1}
                />
                <Input
                  placeholder="What's on your mind?!"
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                />
                <label style={{ cursor: "pointer" }}>
                  <Input
                    name="image"
                    type="file"
                    hidden
                    onChange={handleChange}
                    ref={fileInputRef}
                  />
                  <Icon
                  mt={1}
                    mr={"10px"}
                    ml={"10px"}
                    color={"green"}
                    boxSize={8}
                    as={BiSolidImageAdd}
                  />
                </label>
                <Button
                  bg="green"
                  mr={3}
                  _hover={{ bg: "green.500" }}
                  textColor={"white"}
                  onClick={(e: any) => handlePost(e)}
                >
                  Post
                </Button>
              </FormControl>
          </ModalBody>
            </form>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
