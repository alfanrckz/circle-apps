import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IThreadPost } from "../../../interface/thread";
import { API } from "../../../libs/api";


export function useThreadReply() {
  const { id } = useParams();
  const [formReply, setFormReply] = useState<IThreadPost>({
    content: "",
    image: "",
  });

  const { data: getReplies, refetch } = useQuery({
    queryKey: ["replies"],
    queryFn: async () =>
      await API.get(`/reply?threadId=${id}`)
        .then((res) => res.data)

        .catch((error) => error.message),
  });

  async function handlePostReply(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("content", formReply.content);
      formData.append("image", formReply.image as File);
      formData.append("thread", id as string);
      formData.append("user", id as string);
      await API.post("/replies", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFormReply({
        content: "",
        image: "",
      });
      refetch();
    } catch (error) {
      throw error;
    }
  }

  function handleChangeReply(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;

    if (files) {
      setFormReply({
        ...formReply,
        [name]: files[0],
      });
    } else {
      setFormReply({
        ...formReply,
        [name]: value,
      });
    }
  }

  const fileInputRefReply = useRef<HTMLInputElement>(null);

  function handleButtonClickReply() {
    fileInputRefReply.current?.click();
  }

  return {
    getReplies,
    handlePostReply,
    handleChangeReply,
    handleButtonClickReply,
    fileInputRefReply,
    formReply,
  };
}
