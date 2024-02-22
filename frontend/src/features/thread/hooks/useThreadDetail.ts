import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IThreadCard } from "../../../interface/thread";
import { useParams } from "react-router-dom";
import { IReplyPost } from "../../../interface/reply";
import { API } from "../../../libs/api";

export function useThreadDetail() {
  const [replies, setReplies] = useState<IThreadCard[]>();
  const [thread, setThread] = useState<IThreadCard>();
  const { id } = useParams();

  const [form, setForm] = useState<IReplyPost>({
    conten: "",
    thread_id: +(id as string),
  });

  async function handlePost(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      await API.post("/replies", form);
      getReplies();
    } catch (error) {
      console.log("Failed to get replies", error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function getThreadById() {
    try {
      const response = await API.get("/thread/:id");
      setThread(response.data);
    } catch (error) {
      console.log("Failed to get thread", error);
    }
  }

  async function getReplies() {
    try {
      const response = await API.get("/replies?thread_id=" + id);
      setReplies(response.data);
    } catch (err) {
      console.log("Failed to get replies", err);
    }
  }

  useEffect(() => {
    getThreadById();
    getReplies();
  }, []);

  return { replies, thread, form, handleChange, handlePost };
}
