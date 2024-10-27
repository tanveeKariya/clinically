import React, { useEffect, useState } from 'react';

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = new Date(targetDate) - now;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
    </div>
  );
};

export default Timer;
