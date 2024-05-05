import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useThreads } from "../hooks/useThreads";
import { threadId } from "worker_threads";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";

export default function AlertDialogThread(threadId: number, userId: number) {
  const { deleteThread, getThread, getThreads } = useThreads();
const profile = useSelector((state: RootState) => state.profile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleDelete = () => {
    try {
    if(profile.id == userId) {
        
        deleteThread(threadId);
        getThread();
        getThreads();
        alert("Thread deleted successfully");
        onClose()
    } 
    } catch (error) {
        alert("Thread not deleted")
    }
  };
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
