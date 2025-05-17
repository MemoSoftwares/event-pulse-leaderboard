
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Placeholder for organization data
const collaborations = [
  {
    id: "ieee",
    title: "IEEE CS Chapter",
    description: "The IEEE Computer Society is the world's leading organization of computing professionals, providing resources and opportunities for networking and career advancement.",
    longDescription: "The IEEE Computer Society, a global leader in technology innovation, connects professionals and students through publications, conferences, and educational initiatives. The chapter at our university fosters collaboration on cutting-edge research and organizes workshops, hackathons, and guest lectures to build a vibrant computing community.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    imageUrl: "https://via.placeholder.com/600x400?text=IEEE+CS+Chapter", 
    color: "bg-university-700"
  },
  {
    id: "foss",
    title: "FOSS UOK",
    description: "Free and Open Source Software community promoting FOSS adoption, development, and education at the University.",
    longDescription: "FOSS UOK (Free and Open Source Software University of Knowledge) is dedicated to promoting open-source software development principles. Members contribute to open-source projects, organize code sprints, and conduct workshops on tools like Git, Linux, and various open-source frameworks to foster a culture of collaborative development and knowledge sharing.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    imageUrl: "https://via.placeholder.com/600x400?text=FOSS+UOK",
    color: "bg-gold-500"
  },
  {
    id: "isaca",
    title: "ISACA",
    description: "Information Systems Audit and Control Association chapter focused on IT governance, security, and risk management.",
    longDescription: "ISACA (Information Systems Audit and Control Association) provides students with opportunities to develop skills in IT governance, cybersecurity, and risk management. The chapter hosts certification preparation sessions, security competitions, and industry networking events to bridge academic knowledge with professional practice in information systems security and control.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    imageUrl: "https://via.placeholder.com/600x400?text=ISACA",
    color: "bg-university-500"
  }
];

const Collaboration: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<typeof collaborations[0] | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenVideo = (org: typeof collaborations[0]) => {
    setSelectedOrg(org);
    setOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-1 page-container">
        <h1 className="page-header text-center mb-12">University Collaborations</h1>
        
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our university actively collaborates with various professional organizations to enhance the learning experience and provide industry connections for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {collaborations.map((org) => (
            <Card key={org.id} className="card-hover overflow-hidden border-none shadow-lg">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${org.imageUrl})` }}
              ></div>
              <CardHeader className={`${org.color} text-white`}>
                <CardTitle className="text-xl">{org.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-800 text-base min-h-[80px]">
                  {org.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleOpenVideo(org)} 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Play size={16} />
                  Watch Video
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedOrg && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedOrg.title}</DialogTitle>
            </DialogHeader>
            
            <div className="mt-2">
              <p className="mb-6 text-gray-700">{selectedOrg.longDescription}</p>
              
              <div className="relative aspect-video">
                <iframe 
                  src={selectedOrg.videoUrl} 
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${selectedOrg.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Collaboration;
