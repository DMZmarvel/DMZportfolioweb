import React, { useState, useEffect } from 'react';
import { PuffLoader } from "react-spinners"
import Contacts from '../../components/Contacts/Contacts';


const contactRut = ({ language }) => {

const [Loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => 
   setLoading(false), 3000);

  return () => clearTimeout(timer);
}, []);

if (Loading) {
  return  <div className="puff">
  <PuffLoader color="aqua" size={100} />
</div>
}


  return (
    <div>
   <Contacts />
    </div>
  )
}

export default contactRut