import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { IThreadPost } from "../../../interface/thread";
import { API } from "../../../libs/api";
import { GET_THREADS } from "../../../stores/rootReducer";

export function useThreads() {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread.threads);

  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  });

  async function getThreads() {
    const response = await API.get("/thread");
    dispatch(GET_THREADS(response.data));
  }

  async function handlePost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", form.content);
      formData.append("image", form.image as File);
      await API.post("/thread", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    // console.log("Thread added successfully", response);

    getThreads();
  }

  useEffect(() => {
    getThreads();
  }, []);

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
  return { handleChange, handlePost, fileInputRef, handleButtonClick, threads };
}
