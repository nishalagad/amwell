import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const ExampleComponent = () => {
  const notify = () => {
    toast("This is a toast notification!");
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default ExampleComponent;
