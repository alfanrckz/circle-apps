import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { IThreadCard, IThreadPost } from "../../../interface/thread";
import { API } from "../../../libs/api";
import { GET_THREADS } from "../../../stores/rootReducer";
import { useParams } from "react-router-dom";
import useToast from "../../../utils/useToast";

export function useThreads() {
  const profile = useSelector((state: RootState) => state.profile);

  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread.threads);
  const [thread, setThread] = useState<IThreadCard>();
  const { id } = useParams();
  const toast = useToast()

  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  });

  async function getThreads() {
    const response = await API.get("/threads");
    dispatch(GET_THREADS(response.data));
  }

  async function getThread() {
    const response = await API.get(`/thread/${Number(id)}`);
    setThread(response.data);
  }

  async function handlePost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", form.content);
      formData.append("image", form.image as File);
     const response = await API.post("/thread", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if(response){
        toast("Thread added successfully", "Thread added", "success");
      }

      setForm({
        content: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
    getThreads();
  }

  useEffect(() => {
    getThreads();
  }, []);

  async function deleteThread(id : number) {
    try {
      
      const response = await API.delete(`/thread/${id}`, {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         }
       });
       console.log(response.data)
    } catch (error) {
      console.log(error);
      
    }

  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleButtonClick() {
    fileInputRef.current?.click();
  }
  return {
    handleChange,
    handlePost,
    fileInputRef,
    handleButtonClick,
    threads,
    getThread,
    thread,
    getThreads,
    form,
    deleteThread
  };
}
