import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getData } from "./carSlice";
import Count from "./Count";
import Input from "./Input";
import Button from "./Button";

const Main = () => {
  const [showDiv,setShowDiv] = useState(true)
  const numCars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  return (
    <div>
       <h1>{numCars.car}</h1>
      <button onClick={()=> dispatch(getData())}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Increment</button>
      {numCars.loading && <h1>Hayu</h1>} 
      {/* <Count initial={0} /> */}
      {/* <Input showDiv={showDiv}/>
      <Button/> */}
    </div>
  );
};

export default Main;
