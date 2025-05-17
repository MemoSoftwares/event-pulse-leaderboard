import React from "react";
import { PlayIcon, PlaySquareIcon } from "lucide-react";

interface VideoPlayButtonProps {
  onClick: () => void;
  className?: string;
}

const VideoPlayButton = ({ onClick, className = "" }: VideoPlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute group inset-0 flex items-center justify-center bg-university-800/20 hover:bg-university-800/40 transition-all duration-500 ${className}`}
      aria-label="Play video"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/80 group-hover:border-university-100 group-hover:bg-university-700/90 group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl shadow-university-900/30">
          <PlayIcon 
            fill="white" 
            size={30} 
            className="text-white ml-1 transform group-hover:scale-125 transition-transform duration-300" 
          />
        </div>
        <p className="mt-3 text-white font-medium text-lg tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          Watch Overview
        </p>
      </div>
    </button>
  );
};

export default VideoPlayButton;