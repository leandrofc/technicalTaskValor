import { RotateCcw } from "lucide-react";
import { Button } from "./Button";
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  const resetCounter = () => {
    setCount(0);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold font-outfit bg-gradient-to-r from-[#FAFAFA] to-[#A1A1AA] bg-clip-text text-transparent antialiased">
          Counter
        </h1>
        <p className="text-xl font-outfit text-[#E4E4E7] antialiased opacity-80">
          An easy tool to track counts
        </p>
      </div>

      <h2 className="text-[256px] leading-tight font-semibold font-outfit bg-gradient-to-r from-[#FAFAFA] to-[#A1A1AA] bg-clip-text text-transparent antialiased">
        {count}
      </h2>

      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5 mb-8">
          <Button Type='decrement' onClick={decrement} />
          <Button Type='increment' onClick={increment} />
        </div>

        <button
          className="w-full flex gap-1 items-center justify-center opacity-80 cursor-pointer p-1 rounded-[50px] hover:shadow-[0_0_25px_rgba(125,125,126,0.75)] transition duration-300"
          onClick={resetCounter}
        >
          <RotateCcw className="text-[#E4E4E7] w-3" />
          <p className="text-sm font-outfit text-[#E4E4E7]">
            Reset counter
          </p>
        </button>
      </div>
    </div>
  );
}
  