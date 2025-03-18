// src/components/TermsAndConditions.tsx

import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Terms and Conditions
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg mb-4">
            These Terms and Conditions govern your use of our website and
            services. By accessing or using the site, you agree to comply with
            these terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            1. User Responsibilities
          </h2>
          <p className="text-lg mb-4">
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Acceptable Use</h2>
          <p className="text-lg mb-4">
            You agree to use the site only for lawful purposes. You may not use
            the site to engage in activities that violate any local, state, or
            national laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Privacy Policy</h2>
          <p className="text-lg mb-4">
            We value your privacy and are committed to protecting your personal
            data. Please refer to our Privacy Policy for details on how we
            collect and use your information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-lg mb-4">
            We will not be held liable for any indirect, incidental, or
            consequential damages arising out of or related to the use of the
            site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Modifications</h2>
          <p className="text-lg mb-4">
            We reserve the right to modify or update these Terms and Conditions
            at any time. You will be notified of any changes, and continued use
            of the site signifies your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about these Terms and Conditions, please
            contact us at [email address].
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
