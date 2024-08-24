import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colours, setColours] = useState([
    "bg-green-600",
    "bg-slate-600",
    "bg-blue-600",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colours.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [colours.length]);

  return (
    <div className="flex-col h-screen w-screen justify-center items-center">
      <div className="flex w-full h-60 gap-5 justify-center items-center">
        <div
          className={`${colours[currentIndex]} w-3/4 h-full rounded-lg`}
        ></div>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        {colours.map((colour, i) => (
          <div
            className={`rounded-full w-4 h-4 cursor-pointer ${
              i === currentIndex ? "bg-slate-700" : "bg-slate-500"
            }`}
            onClick={() => setCurrentIndex(i)}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
