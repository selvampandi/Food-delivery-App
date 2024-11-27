import { useState, useEffect } from "react";

const Grocery = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  useEffect(() => {
    // Code here will run after *every* render
    setCount(count + 1);
    console.log("Code here will run after *every* render");
  },[]);
  return (
    <h1>
      {" "}
      Our grocery online store, and we have a lot of child components inside
      this web page!!!
    </h1>
  );
};

export default Grocery;
