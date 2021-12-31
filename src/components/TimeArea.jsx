import { useState, useEffect } from 'react'

const TimeArea = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000)
  },[])

  return <p>The current time is {currentTime}. </p>;
};

export default TimeArea