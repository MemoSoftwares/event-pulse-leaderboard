import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;  // New prop for location
  linkTo: string;
}

const EventCard = ({ title, description, date, time, location, linkTo }: EventCardProps) => {
  return (
    <Link to={linkTo} className="group block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-lg border border-university-100 hover:border-university-500 overflow-hidden">
        {/* Gradient accent bar */}
        <div className="h-1 bg-gradient-to-r from-university-500 to-university-800" />
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-university-700 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-university-700 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-university-700 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-start text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-university-700 flex-shrink-0 mt-0.5" />
            <span>{location}</span>
          </div>
        </CardContent>    
      </Card>
    </Link>
  );
};

export default EventCard;
