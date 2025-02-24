import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Mail } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="flex gap-5 items-center">
              <div className="w-24 h-24 bg-[#F8E9E7] rounded-full mb-4"></div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Thomas R. Toe</h2>
                <p className="text-gray-500">thomas.r@toe.com</p>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1 text-[#f3766b]" />
                  <span>New York</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {" "}
              <p className="mt-2 text-gray-600">Harvard University</p>
              <p className="text-gray-600">Physics department student</p>
              <p className="text-gray-600">
                Languages: English, French, German, Italian
              </p>
            </div>

            <div className="flex justify-around w-full bg-gray-100 p-2 rounded-lg my-4">
              <div className="text-center">
                <p className="font-semibold">653</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">230</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">1.2k</p>
                <p className="text-sm text-gray-500">Ongoing</p>
              </div>
            </div>

            <Button className="w-full bg-[#f3766b] text-white py-3 rounded-lg mb-4 text-base">
              Job Request
            </Button>

            <Tabs defaultValue="photos" className="w-full mt-4 ">
              <TabsList className="flex justify-between gap-15 mx-auto">
                <TabsTrigger
                  value="photos"
                  className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
                >
                  Photos
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="cursor-pointer data-[state=active]:text-[#f3766b] data-[state=active]:font-semibold"
                >
                  Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <div class="grid grid-rows-2 grid-cols-2 gap-4 h-[30vh]">
                  <div class="row-span-2 bg-[#f8e9e7] rounded-2xl"></div>
                  <div className="bg-[#f8e9e7] rounded-2xl"></div>
                  <div className="bg-[#f8e9e7] rounded-2xl"></div>
                </div>
              </TabsContent>

              <TabsContent value="videos">
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
        </CardContent>
      </Card>
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
};

export default ProfilePage;
