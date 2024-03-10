// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../stores/types/rootState";
// import { API } from "../../../libs/api";
// import { GET_USERS } from "../../../stores/rootReducer";
// import { useState } from "react";

// export function useSearch() {
//   const dispatch = useDispatch();
//   const users = useSelector((state: RootState) => state.user.user);
//   const [filteredUsers, setFilteredUsers] = useState(users);

//   async function getUsers() {
//     try {
//       const response = await API.get("/users");
//       dispatch(GET_USERS(response.data));
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//     getUsers();
//   }

//   const searchUsers = (searchQuery: string) => {
//     const filtered = users.filter((user) =>
//       user.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   return { filteredUsers, getUsers, searchUsers, users };
// }

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/types/rootState";
import { API } from "../../../libs/api";
import { GET_USERS } from "../../../stores/rootReducer";
import { useEffect, useState } from "react";

export function useSearch() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.user);
  // console.log(users);

  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    // Gunakan useEffect untuk memuat data pengguna saat komponen dimuat
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
    setFilteredUsers(filtered);
  };

  return { filteredUsers, searchUsers, users };
}
