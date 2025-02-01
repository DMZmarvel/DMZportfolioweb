import React, { useState, useEffect } from 'react';
import { PuffLoader } from "react-spinners"
import Project from '../components/My-Projects/Project'

const projectRut = () => {

  
const [Loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => 
   setLoading(false), 3000);

  return () => clearTimeout(timer);
}, []);

if (Loading) {
  return  <div className="puff">
  <PuffLoader color="#3498db" size={60} />;
</div>
}


  return (
    <div><Project /></div>
  )
}

export default projectRut