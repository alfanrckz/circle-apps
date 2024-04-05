import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { GET_USERS } from "../../../stores/rootReducer";
import { useEffect, useState } from "react";

export function useSearch() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.user);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const profile = useSelector((state: RootState) => state.profile);
  // console.log(profile);

  useEffect(() => {

    async function getUsers() {
      try {
        const response = await API.get("/users");
        dispatch(GET_USERS(response.data));
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {}, []);

  const searchUsers = (searchQuery: string) => {
    const filtered = users.filter((user) =>
      user.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredUserLogin = filtered.filter((user) => user.id !== profile.id);
    if (filtered) setFilteredUsers( filteredUserLogin);

  };

  return { filteredUsers, searchUsers, users,  };
}
