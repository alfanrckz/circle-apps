import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { RiImageEditFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { API } from "../../../libs/api";
import { RootState } from "../../../stores/types/rootState";
import { useProfile } from "../../profile/hooks/useProfile";
import useToast from "../../../utils/useToast";


export default function ModalEditUser() {
  const profile = useSelector((state: RootState) => state.profile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [picture, setPicture] = useState<string | null | File>(profile.picture);
  const [previewPicture, setPreviewPicture] = useState<string | null>(
    profile.picture
  );
  const [cover, setCover] = useState<string | null | File>(profile.cover_photo);
  const [previewCover, setPreviewCover] = useState<string | null>(
    profile.cover_photo
  );

  const [inputData, setInputData] = useState({
    fullName: profile.fullName,
    username: profile.username,
    bio: profile.bio,
  });

  const { check } = useProfile();

  useEffect(() => {
    setInputData({
      fullName: profile.fullName,
      username: profile.username,
      bio: profile.bio,
    });

    if (profile.picture) {
      setPicture(profile.picture);
      setPreviewPicture(profile.picture);
    }
    if (profile.cover_photo) {
      setCover(profile.cover_photo);
      setPreviewCover(profile.cover_photo);
    }
  }, [profile]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangePicture(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedPicture = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPicture(selectedPicture);
          setPreviewPicture(reader.result);
        }
      };

      reader.readAsDataURL(selectedPicture);
    }
  }
  function handleChangeCover(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedCover = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setCover(selectedCover);
          setPreviewCover(reader.result);
        }
      };

      reader.readAsDataURL(selectedCover);
    }
  }

  const toast = useToast()
  async function handleSubmit() {
    try {
      const formData = new FormData();
      formData.append("fullName", inputData.fullName);
      formData.append("username", inputData.username);
      formData.append("bio", inputData.bio);

      if (picture instanceof File) {
        formData.append("picture", picture);
        const response = await API.patch(`/upload/picture/${profile.id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if(response){
          toast("Profile updated successfully", "Profile updated", "success");
        }
      }

      if (cover instanceof File) {
        formData.append("cover_photo", cover);
       const response = await API.patch(`/upload/cover/${profile.id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if(response){
          toast("Profile updated successfully", "Profile updated", "success");
        }

      }

      const response = await API.patch(`/user/${profile.id}`, inputData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if(response){
        toast("Profile updated successfully", "Profile updated", "success");
      }
      

      // Update profile data after successful update
      const updatedProfile = response.data;
      setInputData({
        fullName: updatedProfile.fullName,
        username: updatedProfile.username,
        bio: updatedProfile.bio,
      });
    
      check();
      onClose();
    } catch (error) {
      console.error("Error while updating profile:", error);
    }
  }

  return (
    <>
      <Button
        borderWidth={1}
        borderColor="white"
        bg={"mainBg.100"}
        textColor={"white"}
        size="sm"
        onClick={onOpen}
        _hover={{ bg: "mainBg.100", borderColor: "#478CCF", textColor: "#478CCF" }}
      >
        Edit Profile
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"mainBg.100"} as="form" onSubmit={handleSubmit}>
          <ModalHeader>Edit Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <InputGroup>
              <InputLeftElement
                pointerEvents={"none"}
                cursor="pointer"
                w="100%"
                h="200px"
              >
                <Image
                  w="100%"
                  h="200px"
                  src={previewCover!}
                  alt="cover_photo"
                  rounded={10}
                />
              </InputLeftElement>
              <Input
                opacity="0"
                type="file"
                name="cover_photo"
                cursor="pointer"
                w="100%"
                zIndex="100"
                accept="image/*"
                onChange={handleChangeCover}
              />

              <InputRightElement>
                <Text
                  mt={-3}
                  mr={-3}
                  bg="mainBg.100"
                  color={"white"}
                  p="3"
                  rounded="full"
                  fontSize="20px"
                >
                  <RiImageEditFill />
                </Text>
              </InputRightElement>
            </InputGroup>

            <InputGroup mt={130} ml={5}>
              <InputLeftElement w={"100px"}>
                <Image
                  ml={-10}
                  zIndex={2}
                  border="2px"
                  borderColor="gray.200"
                  borderRadius="100%"
                  objectFit="cover"
                  h={"100px"}
                  w={"100px"}
                  left={2}
                  src={
                    previewPicture ? previewPicture : "/placeholder-profile.jpg"
                  }
                  alt="picture"
                />
              </InputLeftElement>
              <Input
                mt="30px"
                mr="-100px"
                type="file"
                name="picture"
                w="100px"
                position="absolute"
                zIndex="5"
                opacity={0}
                cursor="pointer"
                onChange={handleChangePicture}
              />
              <InputLeftElement>
                <Text
                  mt="60px"
                  mr="-100px"
                  bg="mainBg.100"
                  color={"white"}
                  p="3"
                  rounded="full"
                  fontSize="20px"
                >
                  <RiImageEditFill />
                </Text>
              </InputLeftElement>
            </InputGroup>

            <FormControl mt="100px">
              <FormLabel>Full Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="FullName"
                value={inputData.fullName || ""}
                name="fullName"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Username"
                value={inputData.username || ""}
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder="Bio"
                value={inputData.bio || ""}
                name="bio"
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="#478CCF" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
