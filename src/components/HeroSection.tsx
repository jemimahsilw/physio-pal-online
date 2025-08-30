import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Calendar, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Telerehabilitation
            <span className="text-primary block">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect patients and healthcare providers through our comprehensive telerehabilitation platform. 
            Monitor progress, schedule sessions, and deliver personalized care remotely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/patient">
              <Button size="lg" className="w-full sm:w-auto">
                Patient Portal
              </Button>
            </Link>
            <Link to="/doctor">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Doctor Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Video Sessions</h3>
              <p className="text-gray-600">Secure video consultations with healthcare providers</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Activity className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Exercise Tracking</h3>
              <p className="text-gray-600">Monitor and track rehabilitation exercises</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Appointment Scheduling</h3>
              <p className="text-gray-600">Easy scheduling and calendar management</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Patient Management</h3>
              <p className="text-gray-600">Comprehensive patient care coordination</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};