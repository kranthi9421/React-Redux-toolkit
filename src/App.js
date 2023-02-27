import React from "react";
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./UserSlice";

const App = () => {
  const data = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const delUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h1>Home</h1>
      <UserDetails />
      {data.map((item, id) => (
        <li key={id}>
          {item}
          <button onClick={() => delUser(id)}>Del</button>
        </li>
      ))}
    </div>
  );
};

export default App;
