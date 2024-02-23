import { ChangeEvent, useState } from "react";
import { IUserRegister } from "../../../interface/user";
import { API } from "../../../libs/api";

import { useNavigate } from "react-router-dom";
import useToast from "../../../hooks/useToast";

export function useRegister() {
  const navigate = useNavigate();
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

  const toast = useToast();

  async function handleRegister() {
    try {
      const response = await API.post("/register", form);
      console.log("register done!!");
      if (response) toast("Register success", "Register success", "success");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return { handleChange, handleRegister };
}
