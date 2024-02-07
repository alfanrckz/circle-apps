import { Card, CardBody, Text } from "@chakra-ui/react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Card bgColor="gray.100">
      <CardBody display={"flex"} alignItems={"center"} gap={2}>
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
