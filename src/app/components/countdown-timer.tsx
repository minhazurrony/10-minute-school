"use client";
import { useState, useEffect } from "react";

type CountdownTimerProps = {
  endAt: string;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ endAt }) => {
  // Target date/time of the event
  const targetDate = new Date(endAt).getTime();

  // State for time remaining
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the time difference
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the timer if the event has passed
        return;
      }

      // Calculate the remaining time in days, hours, minutes, seconds
      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  return (
    <div className="flex items-center space-x-4 font-semibold text-white">
      <div>
        <div className="bg-timer border-timer flex h-[70px] w-[65px] items-center justify-center rounded-2xl text-2xl md:text-4xl">
          {timeRemaining.days}
        </div>
        <p className="mt-2 text-center text-sm text-gray-300">Days</p>
      </div>

      <div>
        <div className="bg-timer border-timer flex h-[70px] w-[65px] items-center justify-center rounded-2xl text-2xl md:text-4xl">
          {timeRemaining.hours}
        </div>
        <p className="mt-2 text-center text-sm text-gray-300">Hours</p>
      </div>

      <div>
        <div className="bg-timer border-timer flex h-[70px] w-[65px] items-center justify-center rounded-2xl text-2xl md:text-4xl">
          {timeRemaining.minutes}
        </div>
        <p className="mt-2 text-center text-sm text-gray-300">Minutes</p>
      </div>

      <div>
        <div className="bg-timer border-timer flex h-[70px] w-[65px] items-center justify-center rounded-2xl text-2xl md:text-4xl">
          {timeRemaining.seconds}
        </div>
        <p className="mt-2 text-center text-sm text-gray-300">Seconds</p>
      </div>
    </div>
  );
};
