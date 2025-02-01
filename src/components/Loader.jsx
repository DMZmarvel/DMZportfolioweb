import React from "react";
import { PuffLoader } from "react-spinners"
import '../page/forall.css'

const Loader = () => {
  return (
    <div className="boo">
      <PuffLoader color="#3498db" size={60} />
   
    </div>
  );
};

export default Loader;