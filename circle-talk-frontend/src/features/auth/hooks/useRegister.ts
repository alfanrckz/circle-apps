import { ChangeEvent, useState } from "react";
import { IUserRegister } from "../../../interface/user";
import { API } from "../../../libs/api";
import { useNavigate } from "react-router-dom";
import useToast from "../../../utils/useToast";

export function useRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IUserRegister>({
    email: "",
    fullName: "",
    username: "",
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
      console.log("register done!!", response);
      if (response) toast("Register berhasil", "Register berhasil", "success");
      navigate("/login");
    } catch (error: any) {
      let errorMessage = "Terjadi kesalahan yang tidak terduga";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      toast(errorMessage, "Register Error", "error");
      console.error(error);
    }
  }

  return { handleChange, handleRegister };
}
