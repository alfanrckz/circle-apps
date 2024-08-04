import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const ReplyForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(comment);
    setComment(""); 
  };

  return (
    <Box mt={4}>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center">
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type your comment here..."
            variant="outline"
            size="sm"
            border={"none"}
          />
          <Button type="submit" ml={2} size="sm">
            Reply
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ReplyForm;
