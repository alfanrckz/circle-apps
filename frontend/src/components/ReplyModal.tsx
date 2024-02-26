// ReplyModal.tsx
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  Textarea,
  Flex,
  Box,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { FiImage } from "react-icons/fi";

interface ReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReplyModal: React.FC<ReplyModalProps> = ({ isOpen, onClose }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const toast = useToast();

  const handleSubmit = () => {
    // Handle submit logic here
    if (!content.trim() && !image) {
      toast({
        title: "Content and image can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log("Content:", content);
    console.log("Image:", image);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent bg="gray.800">
        <ModalHeader color="white" fontSize="lg" fontWeight="medium">
          Add Reply
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter reply content"
              color="white"
              size="sm"
            />
            <Box flex="1">
              <Input
                type="file"
                id="image-upload"
                accept="image/*"
                display="none"
                onChange={handleImageChange}
              />
              <Flex mt={4} alignItems="center">
                <IconButton
                  aria-label="Upload Image"
                  icon={<FiImage />}
                  colorScheme="blue"
                  size="sm"
                  ml={2}
                  onClick={() => {
                    document.getElementById("image-upload")?.click();
                  }}
                />
              </Flex>
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSubmit} size="sm">
            Add Reply
          </Button>
          <Button variant="ghost" color="white" onClick={onClose} size="sm">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReplyModal;
