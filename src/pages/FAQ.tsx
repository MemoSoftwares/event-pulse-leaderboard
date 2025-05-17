
import React, { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageCircle, BookOpen } from "lucide-react";

// Define the types for our FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Pre-defined FAQ questions
const predefinedFAQs: FAQItem[] = [
  {
    question: "What degrees do you offer?",
    answer: "We offer Bachelor of Computer Science (3 years), Master of Computer Science (2 years), and PhD in Computer Science (3-5 years) programs."
  },
  {
    question: "What are the entry requirements?",
    answer: "Applicants should have a strong background in mathematics and logical thinking. Programming experience is beneficial but not required for undergraduate programs."
  },
  {
    question: "What modules are included in the curriculum?",
    answer: "Our curriculum includes: Introduction to Programming, Data Structures and Algorithms, Database Systems, Web Development, Artificial Intelligence, Computer Networks, Software Engineering, and Cybersecurity."
  },
  {
    question: "What career opportunities are available for graduates?",
    answer: "Our graduates find successful careers in various fields including: Software Developer, Web Developer, Data Analyst, System Administrator, AI Specialist, Machine Learning Engineer, Senior Software Engineer, Data Scientist, Research Scientist, Professor, R&D Specialist, and Senior Technical Lead."
  },
  {
    question: "How long is the Bachelor program?",
    answer: "The Bachelor of Computer Science is a 3-year program requiring 180 credits."
  }
];

const FAQ: React.FC = () => {
  const [savedMessages, setSavedMessages] = useState<FAQItem[]>([]);

  useEffect(() => {
    // Retrieve saved messages from localStorage
    const savedChatMessages = localStorage.getItem('savedChatMessages');
    if (savedChatMessages) {
      const parsedMessages = JSON.parse(savedChatMessages);
      setSavedMessages(parsedMessages);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-university-800 mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-600">
              Find answers to common questions about our degrees and courses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            <Card>
              <CardHeader className="bg-university-800 text-white">
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {predefinedFAQs.map((faq, index) => (
                    <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {savedMessages.length > 0 && (
              <Card>
                <CardHeader className="bg-university-700 text-white">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2" />
                    Your Previous Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {savedMessages.map((message, index) => (
                      <AccordionItem key={`saved-${index}`} value={`saved-${index}`}>
                        <AccordionTrigger className="text-left">
                          {message.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{message.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
