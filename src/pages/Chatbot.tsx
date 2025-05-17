
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Book, Info, BookmarkPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from "@/components/ChatMessage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define message types for the chatbot
type MessageType = "user" | "bot";

interface Message {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
}

// Course information database - you can expand this
const courseInfo = {
  degrees: [
    {
      name: "Bachelor of Computer Science",
      duration: "3 years",
      credits: 180,
      description: "A comprehensive program covering programming, algorithms, data structures, and software engineering principles.",
      careers: ["Software Developer", "Web Developer", "Data Analyst", "System Administrator"]
    },
    {
      name: "Master of Computer Science",
      duration: "2 years",
      credits: 120,
      description: "An advanced degree focusing on specialized computing topics including AI, machine learning, and advanced software architecture.",
      careers: ["AI Specialist", "Machine Learning Engineer", "Senior Software Engineer", "Data Scientist"]
    },
    {
      name: "PhD in Computer Science",
      duration: "3-5 years",
      credits: "Research-based",
      description: "A research-focused doctorate program for those interested in advancing computer science knowledge through original research.",
      careers: ["Research Scientist", "Professor", "R&D Specialist", "Senior Technical Lead"]
    }
  ],
  modules: [
    "Introduction to Programming",
    "Data Structures and Algorithms",
    "Database Systems",
    "Web Development",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering",
    "Cybersecurity"
  ],
  requirements: "Applicants should have a strong background in mathematics and logical thinking. Programming experience is beneficial but not required for undergraduate programs."
};

// Function to generate responses based on user input
const generateResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase();
  
  if (normalizedInput.includes("degree") || normalizedInput.includes("program")) {
    return `We offer several degree programs:\n\n${courseInfo.degrees.map(d => 
      `• ${d.name} (${d.duration})\n  ${d.description}`
    ).join('\n\n')}`;
  }
  
  if (normalizedInput.includes("bachelor")) {
    const degree = courseInfo.degrees.find(d => d.name.toLowerCase().includes("bachelor"));
    return degree ? 
      `The ${degree.name} is a ${degree.duration} program requiring ${degree.credits} credits. ${degree.description}\n\nCareer opportunities include: ${degree.careers.join(", ")}.` : 
      "I don't have information about that specific bachelor degree.";
  }
  
  if (normalizedInput.includes("master")) {
    const degree = courseInfo.degrees.find(d => d.name.toLowerCase().includes("master"));
    return degree ? 
      `The ${degree.name} is a ${degree.duration} program requiring ${degree.credits} credits. ${degree.description}\n\nCareer opportunities include: ${degree.careers.join(", ")}.` : 
      "I don't have information about that specific master degree.";
  }
  
  if (normalizedInput.includes("phd") || normalizedInput.includes("doctorate")) {
    const degree = courseInfo.degrees.find(d => d.name.toLowerCase().includes("phd"));
    return degree ? 
      `The ${degree.name} is a ${degree.duration} program. ${degree.description}\n\nCareer opportunities include: ${degree.careers.join(", ")}.` : 
      "I don't have information about that specific PhD program.";
  }
  
  if (normalizedInput.includes("module") || normalizedInput.includes("course") || normalizedInput.includes("subject")) {
    return `Our curriculum includes the following modules:\n\n${courseInfo.modules.map(m => `• ${m}`).join('\n')}`;
  }
  
  if (normalizedInput.includes("requirement") || normalizedInput.includes("qualify") || normalizedInput.includes("apply")) {
    return `${courseInfo.requirements}`;
  }
  
  if (normalizedInput.includes("career") || normalizedInput.includes("job") || normalizedInput.includes("employment")) {
    return `Our graduates find successful careers in various fields including:\n\n${Array.from(new Set(courseInfo.degrees.flatMap(d => d.careers))).map(c => `• ${c}`).join('\n')}`;
  }
  
  if (normalizedInput.includes("hello") || normalizedInput.includes("hi")) {
    return "Hello! I'm the university course assistant. How can I help you with information about our degrees and courses?";
  }
  
  return "I'm not sure about that. You can ask me about our degree programs, course modules, entry requirements, or career opportunities for graduates.";
};

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
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        type: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Function to save the current conversation to local storage
  const saveConversation = () => {
    // Find the last user question and bot answer
    let userQuestion = "";
    let botAnswer = "";
    
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].type === "bot" && !botAnswer) {
        botAnswer = messages[i].text;
      } else if (messages[i].type === "user" && !userQuestion) {
        userQuestion = messages[i].text;
      }
      
      if (userQuestion && botAnswer) break;
    }
    
    if (userQuestion && botAnswer) {
      // Get existing saved messages
      const savedMessages = JSON.parse(localStorage.getItem('savedChatMessages') || '[]');
      
      // Check if this Q&A is already saved
      const isDuplicate = savedMessages.some(
        (item: {question: string, answer: string}) => 
          item.question === userQuestion && item.answer === botAnswer
      );
      
      if (!isDuplicate) {
        // Add new message pair
        savedMessages.push({
          question: userQuestion,
          answer: botAnswer
        });
        
        // Save back to localStorage
        localStorage.setItem('savedChatMessages', JSON.stringify(savedMessages));
        
        toast({
          title: "Saved to FAQ",
          description: "This conversation has been added to your FAQs.",
        });
      } else {
        toast({
          title: "Already Saved",
          description: "This Q&A is already in your FAQs.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Cannot Save",
        description: "There needs to be at least one question and answer to save.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="bg-university-800 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle className="mr-2" />
                  <h1 className="text-xl font-bold">University Course Assistant</h1>
                </div>
                <Button 
                  onClick={saveConversation} 
                  variant="outline" 
                  size="sm" 
                  className="text-white border-white hover:bg-white/20"
                >
                  <BookmarkPlus className="mr-1 h-4 w-4" /> Save to FAQ
                </Button>
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
