import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "./api";
import { useDispatch } from "react-redux";
import { addUser } from "./UserSlice";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div>
      <button onClick={() => addNewUser(fakeUserData())}>Add User</button>
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
