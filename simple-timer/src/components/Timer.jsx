import { useState } from "react";
import { useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import { useEffect } from "react";

const Timer = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(
    () => Number(localStorage.getItem("time")) || 0
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", time.toString());
  }, [time]);

  console.log("re-render");
  const toggleTimer = () => {
    if (isRunning) {
      // Stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem("time");
  };

  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
