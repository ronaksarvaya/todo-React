import React, { useState } from 'react'


const DateTime = () => {
     const [date_time,setDt]=useState("");
     const now = () => {
        const date = new Date();
      
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
      
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        setDt(`Date : ${day}-${month}-${year} Time: ${hours}  ${minutes}:${seconds}`);
      };
      setInterval(() => {
        now();
         }, 1000)
  return (
   <div>
     {date_time}
   </div>

      
  )
}

export default DateTime
