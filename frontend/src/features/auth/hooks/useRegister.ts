import { ChangeEvent, useState } from "react";
import { IUserRegister } from "../../../interface/user";
import { API } from "../../../libs/api";

export function useRegister() {
  const [form, setForm] = useState<IUserRegister>({
    email: "",
    username: "",
    full_name: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      await API.post("/register", form);
      console.log("register done!!");
    } catch (error) {
      console.log(error);
    }
  }

  return { handleChange, handleRegister };
}
