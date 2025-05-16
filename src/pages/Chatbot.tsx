import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Book, Info } from "lucide-react";
import ChatMessage from "@/components/ChatMessage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

// Define message types for the chatbot
type MessageType = "user" | "bot";

interface Message {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
}

const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const DEEPSEEK_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";

const PDF_URLS = [
    "https://bmryguhgqcqdmcjtquha.supabase.co/storage/v1/object/public/pdfs//DSA-2.pdf",
];

async function queryDeepSeekPDF(question: string): Promise<string> {
  try {
    const response = await axios.post(
      DEEPSEEK_ENDPOINT,
      {
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Generates an answer based on relevant mention documents and university web" },
          { role: "user", content: question }
        ],
        documents: PDF_URLS.map(url => ({ url }))
      },
      {
        headers: {
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    return "Sorry, I couldn't fetch information from the PDF.";
  }
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello, I'm the University Course Assistant. Ask me anything about our degree programs!",
      type: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Await async response
    const botResponse = await generateResponse(input);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      type: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const generateResponse = async (input: string): Promise<string> => {
    const normalizedInput = input.toLowerCase();

    return await queryDeepSeekPDF(input);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="bg-university-800 text-white p-4">
              <div className="flex items-center">
                <MessageCircle className="mr-2" />
                <h1 className="text-xl font-bold">University Course Assistant</h1>
              </div>
              <p className="text-sm text-university-100 mt-1">
                Ask about our degrees, courses, requirements, or career opportunities
              </p>
            </div>

            <ScrollArea className="h-[500px] p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex items-center text-gray-500 animate-pulse">
                    <div className="ml-2">Bot is typing...</div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <form onSubmit={handleSend} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our degree programs..."
                  className="flex-grow"
                />
                <Button type="submit" className="bg-university-800">
                  Send
                </Button>
              </div>
              <div className="mt-2 text-xs text-gray-500 flex items-center">
                <Info className="h-3 w-3 mr-1" />
                <span>Try asking about "degree programs", "course modules", or "career opportunities"</span>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;