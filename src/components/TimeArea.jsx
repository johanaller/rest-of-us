import { useState, useEffect } from 'react'

const TimeArea = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const intervall = setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000)

    return () => clearInterval(intervall)
  },[])

  return <p>The current time is {currentTime}. </p>;
};

export default TimeArea