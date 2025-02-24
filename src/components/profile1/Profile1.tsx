import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Users,
  Clock,
  PhoneCall,
  MapPin,
  ArrowLeft,
  MoreVertical,
} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] w-full max-w-md mx-auto flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Cover Photo */}
        <div className="relative flex justify-between p-4 w-full h-32 bg-[#F8E9E7]">
          <ArrowLeft className="text-gray-600" />
          <h2 className="text-sm font-semibold">My Events</h2>
          <MoreVertical className="text-gray-600" />
          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#F8E9E7] border-4 border-white rounded-full"></div>
        </div>

        {/* Profile Info */}
        <div className="mt-12 text-center">
          <h2 className="text-lg font-semibold">Eleanor Fant</h2>
          <p className="text-gray-500 text-xs">eleanor@fant.com</p>
          <div className="flex justify-between mt-6 text-center bg-white rounded-2xl h-16 items-center px-4 mx-4 shadow-md">
            <div>
              <h4 className="text-lg font-semibold">653</h4>
              <p className="text-[#6e6f8b] text-xs">Customers</p>
            </div>
            <div className="border-r border-l border-gray-200 px-4">
              <h4 className="text-lg font-semibold">230</h4>
              <p className="text-[#6e6f8b] text-xs">Completed</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">1.2k</h4>
              <p className="text-[#6e6f8b] text-xs">Ongoing</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-between mt-6 mb-4 mx-6 text-xs font-semibold">
          <p className="border-b-2 border-[#f3766b] pb-1 text-[#f3766b]">
            Photos
          </p>
          <p className="text-[#6e6f8b]">Videos</p>
          <p className="text-[#6e6f8b]">Events</p>
        </div>

        {/* Job Request Button */}
        <div className="mx-6">
          <Button className="w-full bg-[#f3766b] text-white py-3 rounded-lg mb-4 text-base">
            Job Request
          </Button>
        </div>

        <p className="pb-4 mx-6 text-sm font-semibold">Your Tasks</p>

        {/* Tasks Section */}
        <div className="space-y-4 mx-6">
          <Card className="rounded-lg shadow-md bg-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sm">
                    Checklist for the meeting
                  </p>
                  <p className="text-gray-500 text-xs">
                    Sed ut perspiciatis unde
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-500 text-xs">
                    <div className="flex items-center space-x-1">
                      <Users size={14} /> <span>3 persons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} /> <span>17 June 2021</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} /> <span>10:00 am</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} /> <span>Minima Room</span>
                    </div>
                  </div>
                </div>
                <span className="bg-[#f3766b] text-white text-xs px-3 py-1 rounded-full">
                  Upcoming
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-md bg-white">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">English Lesson</p>
                <p className="text-gray-500 text-xs">
                  Ostrum exercitationem ullan
                </p>
              </div>
              {/* <Button
                variant="outline"
                className="text-red-500 border-red-500 flex items-center space-x-1 text-xs px-3 py-1"
              >
                <PhoneCall size={14} /> <span>Phone</span>
              </Button> */}
              <span className="bg-[#f3766b] text-white text-xs px-6 py-1 rounded-full">
                Phone
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around py-3 shadow-md max-w-md mx-auto text-gray-500 text-lg border-t border-gray-200">
        <IoHomeOutline className="text-gray-500" />
        <FaRegHeart className="text-gray-500" />
        <FiMessageSquare className="text-gray-500" />
        <BsPerson className="text-[#f3766b]" />
        <CiSettings className="text-gray-500" />
      </div>
    </div>
  );
}
