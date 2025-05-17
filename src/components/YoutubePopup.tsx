
import React, { useState, useRef, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

interface YouTubePopupProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

const YouTubePopup = ({ videoId, isOpen, onClose }: YouTubePopupProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current === event.target) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-university-800 to-university-900 shadow-2xl rounded-lg overflow-hidden animate-scale-in">
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button
            onClick={onClose}
            className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-1 sm:p-2 w-full aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="px-4 py-3 bg-black/30 text-white">
          <h3 className="font-semibold text-lg">Computer Science Degree Program</h3>
          <p className="text-sm text-gray-200">Learn more about our program and opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default YouTubePopup;