
import React from "react";
import { MessageCircle, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
interface Message {
  id: string;
  text: string;
  type: "user" | "bot";
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === "bot";
  
  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-university-800 rounded-full flex items-center justify-center text-white">
          <Bot size={18} />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          isBot
            ? "bg-white border border-gray-200"
            : "bg-university-700 text-white"
        )}
      >
        <ReactMarkdown>{message.text}</ReactMarkdown>
        <div
          className={cn(
            "text-xs mt-1",
            isBot ? "text-gray-500" : "text-blue-100"
          )}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-university-700 rounded-full flex items-center justify-center text-white">
          <MessageCircle size={18} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
