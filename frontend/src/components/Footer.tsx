import { Card, CardBody, Text } from "@chakra-ui/react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Card bg="#262626" mt="5">
      <CardBody display={"flex"} alignItems={"center"} gap={2} color="#EDF2F7">
        <Text fontSize={"12px"} fontWeight={"bold"}>
          Developed by Alfansyuri Ziaulhaq
        </Text>
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillFacebook />
        <AiFillInstagram />
      </CardBody>
    </Card>
  );
};
