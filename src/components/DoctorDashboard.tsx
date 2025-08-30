import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Users, Activity, Clock, Video, MessageCircle, TrendingUp, AlertCircle } from "lucide-react";

export const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your patients and track their rehabilitation progress.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-primary">127</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                  <p className="text-2xl font-bold text-secondary">8</p>
                </div>
                <Video className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                  <p className="text-2xl font-bold text-green-600">78%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alerts</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Today's Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Video Session • 9:00 AM</p>
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Mike Chen</p>
                    <p className="text-sm text-gray-600">Progress Review • 11:00 AM</p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Emma Davis</p>
                    <p className="text-sm text-gray-600">Initial Assessment • 3:00 PM</p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Patient Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Recent Patients</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Shoulder Rehabilitation</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="mb-1">Excellent</Badge>
                  <p className="text-sm text-gray-600">85% Progress</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Mike Chen</p>
                    <p className="text-sm text-gray-600">Knee Recovery</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">Good</Badge>
                  <p className="text-sm text-gray-600">72% Progress</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Emma Davis</p>
                    <p className="text-sm text-gray-600">Back Pain Management</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="destructive" className="mb-1">Needs Attention</Badge>
                  <p className="text-sm text-gray-600">45% Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="h-16 text-lg" variant="outline">
            <Users className="h-6 w-6 mr-2" />
            View All Patients
          </Button>
          
          <Button className="h-16 text-lg" variant="outline">
            <Calendar className="h-6 w-6 mr-2" />
            Schedule Session
          </Button>
          
          <Button className="h-16 text-lg" variant="outline">
            <Activity className="h-6 w-6 mr-2" />
            Create Exercise Plan
          </Button>
          
          <Button className="h-16 text-lg" variant="outline">
            <MessageCircle className="h-6 w-6 mr-2" />
            Patient Messages
          </Button>
        </div>
      </div>
    </div>
  );
};