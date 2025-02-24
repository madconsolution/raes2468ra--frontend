import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MoreVertical,
  Phone,
  Globe,
  Mail,
  FileText,
  Download,
} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProfilePage: React.FC = () => {
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
        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Eleanor Fant</h2>
            <p className="text-gray-500 text-xs">eleanor@fant.com</p>
          </div>
          <div className="my-2 mx-4">
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-gray-500">
              Curabitur aliquet erat sed consectetur pellentesque an est vel
              ante accumsan moll Vivamus efficitur on augue justo, sit amet
              tincidunt ligula finibus sit amet. Donec dui libero, porttitor.
            </p>
          </div>
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

        <div className="mx-4 my-4">
          <Button className="w-full bg-[#f3766b] text-white rounded-lg mb-4 text-base">
            Exchange Contact
          </Button>

          <Tabs defaultValue="photos" className="w-full ">
            <TabsList className="flex justify-between gap-15 mx-auto">
              <TabsTrigger
                value="Details"
                className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="Media"
                className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
              >
                Media
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
              >
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Details">
              <div class="w-full mx-auto space-y-4">
                <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                  <div class="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <span class="text-gray-700">Phone</span>
                  </div>
                  <span class="text-gray-600">2347586966969</span>
                </div>

                <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                  <div class="flex items-center space-x-3">
                    <Globe className="w-4 h-4" />
                    <span class="text-gray-700">Website</span>
                  </div>
                  <span class="text-gray-600">mywebsite.com</span>
                </div>

                <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                  <div class="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span class="text-gray-700">Email</span>
                  </div>
                  <span class="text-gray-600">myemail.com</span>
                </div>

                <div class="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
                  <div class="flex items-center space-x-3">
                    <FileText className="w-4 h-4" />
                    <span class="text-gray-700">Resume</span>
                  </div>
                  <Download className="w-4 h-4 text-[#f3766b]" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="Media">
              <p className="text-center text-gray-500 mt-4">
                No Videos Available
              </p>
            </TabsContent>

            <TabsContent value="events">
              <p className="text-center text-gray-500 mt-4">
                No Events Available
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
