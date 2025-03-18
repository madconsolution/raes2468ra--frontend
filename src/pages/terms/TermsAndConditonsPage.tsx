import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Background Image Section */}
      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
        <h1 className="text-gray-800 text-lg font-semibold">
          INFORMATION PAGE
        </h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-4 space-x-8">
        <button className="text-gray-500 hover:text-gray-800">EVENTS</button>
        <button className="text-red-500 font-semibold border-b-2 border-red-500">
          TERMS
        </button>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-lg font-bold mb-2">Phones</h2>
          <p className="text-gray-700 mb-4">
            Curabitur aliquet erat sed consectetur pellentesque an est vel ante
            accumsan mollis. Vivamus efficitur on augue justo, sit amet
            tincidunt ligula finibus sit amet. Donec dui libero, porttitor.
          </p>

          <h2 className="text-lg font-bold mb-2">Address</h2>
          <p className="text-gray-700 mb-4">
            Curabitur aliquet erat sed consectetur pellentesque an est vel ante
            accumsan mollis. Vivamus efficitur on augue justo, sit amet
            tincidunt ligula finibus sit amet. Donec dui libero, porttitor.
          </p>

          <h2 className="text-lg font-bold mb-2">Phones</h2>
          <p className="text-gray-700 mb-4">
            Curabitur aliquet erat sed consectetur pellentesque an est vel ante
            accumsan mollis. Vivamus efficitur on augue justo, sit amet
            tincidunt ligula finibus sit amet. Donec dui libero, porttitor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
