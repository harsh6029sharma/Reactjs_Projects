import React, { useEffect, useState } from "react";

const DisplayTime = () => {
    const [time,setTime] = useState(new Date())

  useEffect(() => {
    const intervalid = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return ()=>clearInterval(intervalid)

  },[]);

  return (
    <div>
     <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
    </div>
  );
};

export default DisplayTime;
