import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Content2 = () => {
  return (
    <div className="mb-20 px-4 md:px-10">
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-10 mt-5">
        "Why Choose Our Practical Training Program?"
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
        {/* Feature Card */}
        <div className="p-4 rounded-lg shadow-sm border">
          <FontAwesomeIcon icon={faBolt} size="2x" className="bg-orange-300 rounded-full p-2 mb-3" />
          <h6 className="font-bold mb-2">ONLINE CLASSES</h6>
          <span className="text-sm text-gray-600">Access classes anytime, anywhere.</span>
        </div>

        <div className="p-4 rounded-lg shadow-sm border">
          <FontAwesomeIcon icon={faBolt} size="2x" className="bg-orange-300 rounded-full p-2 mb-3" />
          <h6 className="font-bold mb-2">Flexible Timing</h6>
          <span className="text-sm text-gray-600">Learn at your own pace.</span>
        </div>

        <div className="p-4 rounded-lg shadow-sm border">
          <FontAwesomeIcon icon={faBolt} size="2x" className="bg-orange-300 rounded-full p-2 mb-3" />
          <h6 className="font-bold mb-2">Free Classes</h6>
          <span className="text-sm text-gray-600">Start your journey with free sessions.</span>
        </div>

        <div className="p-4 rounded-lg shadow-sm border">
          <FontAwesomeIcon icon={faBolt} size="2x" className="bg-orange-300 rounded-full p-2 mb-3" />
          <h6 className="font-bold mb-2">12 months Complete Program</h6>
          <span className="text-sm text-gray-600">Comprehensive 12-month curriculum.</span>
        </div>

        <div className="p-4 rounded-lg shadow-sm border">
          <FontAwesomeIcon icon={faBolt} size="2x" className="bg-orange-300 rounded-full p-2 mb-3" />
          <h6 className="font-bold mb-2">2 Certificates</h6>
          <span className="text-sm text-gray-600">Government & company certified.</span>
        </div>
      </div>
    </div>
  );
};

export default Content2;
