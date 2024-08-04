import { API } from "../../../libs/api";
import { useProfile } from "../../profile/hooks/useProfile";

export function useFollow() {
  const { check } = useProfile();
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
    check();
  }

  async function unfollow(id: number) {
    await API.delete(`/unfollow?follow=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    check();
  }

  return { follow, unfollow };
}
