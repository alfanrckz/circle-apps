import { API } from "../../../libs/api";

export function useFollow() {
  async function follow(id: number) {
    await API.post(
      "/follow",
      {
        following: id,
      },
      {  
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  async function unfollow(id: number) {
    await API.delete(
      `/unfollow?follow=${id}`, 
      {  
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  return { follow, unfollow };
}
