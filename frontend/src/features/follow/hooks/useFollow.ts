import { API } from "../../../libs/api";

export function useFollow() {
  async function follow(id: number) {
    await API.post(
      "/follow",
      {
        following: id,
      },
      {  // Ubah ini menjadi objek tunggal
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  async function unfollow(id: number) {
    await API.delete(
      `/unfollow/${id}`, // Ubah URL endpoint sesuai dengan yang diharapkan
      {  // Ubah ini menjadi objek tunggal
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  return { follow, unfollow };
}
