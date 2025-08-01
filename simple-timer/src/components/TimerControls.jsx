import { useEffect } from "react";
import { useRef } from "react";

const TimerControls = ({ toggleTimer, resetTimer, isRunning }) => {
  const startBtnRef = useRef(null);

  useEffect(() => {
    if (startBtnRef.current) {
      startBtnRef.current.focus();
    }
  }, []);

  return (
    <div>
      <button
        ref={startBtnRef}
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
