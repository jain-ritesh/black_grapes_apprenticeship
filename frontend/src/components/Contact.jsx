import React from "react";

const Contact = () => {
  return (
    <div className="bg-[rgb(249,250,251)] p-5 md:p-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-2xl font-semibold pb-4 underline decoration-4 decoration-orange-500 text-center">
          Visit Our Location
        </h2>
        <p className="mt-4 text-center text-gray-600">
          We are located in the heart of the city. Drop by to say hello or to
          discuss how we can assist you.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:h-[600px]">
            <iframe
              title="Google Map 1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3067362215224!2d75.88491627393427!3d22.753995226300187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630310c76a0dc5%3A0xf446e40a939f4b1d!2sBlack%20Grapes%20Softech!5e0!3m2!1sen!2sin!4v1744091799721!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex-1 rounded-lg border-0 shadow-md"
            ></iframe>

            <iframe
              title="Google Map 2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3067362215224!2d75.88491627393427!3d22.753995226300187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630310c76a0dc5%3A0xf446e40a939f4b1d!2sBlack%20Grapes%20Softech!5e0!3m2!1sen!2sin!4v1744091799721!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex-1 rounded-lg border-0 shadow-md"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between lg:h-[600px]">
            <div className="text-gray-700 space-y-6 h-full flex flex-col justify-between">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold">Office Address 1</h3>
                <p className="text-amber-500">
                  252-F/H, Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh
                  452010, India
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold">Office Hours</h3>
                <p>Monday - Saturday: 9am - 7pm</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold">Get in Touch</h3>
                <p className="text-amber-500">
                  Email: blackgrapes.arpitjain@gmail.com
                </p>
                <p className="text-amber-500">
                  Email: blackgrapes.deepikajain@gmail.com
                </p>
                <p className="text-amber-500">
                  Phone: +91 7470997884, +91 6262414463, +91 9039397884
                </p>
              </div>

              <div className="pb-2">
                <h3 className="text-lg font-semibold">Office Address 2</h3>
                <p className="text-amber-500">
                  Office Number 1141, in front of Union Bank, Vijay Nagar, Part
                  I, Scheme No 114, Indore, Madhya Pradesh 452010
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
