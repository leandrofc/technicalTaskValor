import { Minus, Plus } from "lucide-react";

type ButtonProps = {
    Type: "increment" | "decrement";
    onClick: () => void;
};

export function Button({ Type, onClick }: ButtonProps) {
    const isIncrement = Type === "increment";

    return (
        <button
            className="w-[70px] h-[43px] rounded-[50px] border border-[#1F2937] bg-gradient-to-r from-[#060606] to-[#2D2D2D] flex items-center justify-center cursor-pointer hover:border-[#27272A] hover:shadow-[0_0_25px_rgba(125,125,126,0.75)] transition duration-300"
            onClick={onClick}  
        >
            {
                isIncrement ? <Plus className="text-white" /> : <Minus className="text-white" />
            }
        </button>
    );
  }
  