// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../stores/types/rootState";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IThreadPost } from "../../../interface/thread";
import { API } from "../../../libs/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { threadId } from "worker_threads";

export function useThreadReply() {
  // const dispatch = useDispatch();
  // const threads = useSelector((state: RootState) => state.thread.threads);
  // const [replies, setReplies] = useState<IThreadCard[]>();
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
