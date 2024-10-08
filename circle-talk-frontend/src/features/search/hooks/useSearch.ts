import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { GET_USERS } from "../../../stores/rootReducer";
import { useEffect, useState, useCallback } from "react";

export async function getUsers(dispatch : any) {
  try {
    const response = await API.get("/users");
    dispatch(GET_USERS(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function useSearch() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.user);
  const profile = useSelector((state: RootState) => state.profile);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchUsers = useCallback((searchQuery: string) => {
    const filtered = users.filter((user) =>
      user.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredUserLogin = filtered.filter((user) => user.id !== profile.id);
    setFilteredUsers(filteredUserLogin);
  }, [users, profile.id]);

  return { filteredUsers, searchUsers, users };
}
