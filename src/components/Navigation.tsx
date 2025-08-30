import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">TeleRehab</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/patient">
              <Button 
                variant={location.pathname === '/patient' ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Patient</span>
              </Button>
            </Link>
            
            <Link to="/doctor">
              <Button 
                variant={location.pathname === '/doctor' ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Stethoscope className="h-4 w-4" />
                <span>Doctor</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};