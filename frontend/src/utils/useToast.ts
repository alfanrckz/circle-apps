import { useToast as Toast } from "@chakra-ui/react";

type ToastStatus = "success" | "info" | "warning" | "error" | undefined;

export default function useToast() {
  const chakraToast = Toast();
  const toast = (title: string, description: string, status: ToastStatus) =>
    chakraToast({
      position: "top",
      title,
      description,
      status,
    });

  return toast;
}
