import React from "react";

const RegisterFrom = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-3xl mt-20">
        <h2 className="text-xl font-semibold text-center mb-4">
          Student Details Page
        </h2>
        <form className="grid grid-cols-2 gap-6 p-5 ">
          <input type="text" placeholder="Full Name" className="input " />
          <input type="text" placeholder="Father Name" className="input" />
          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="text" placeholder="Batch" className="input" />
          <select className="input">
            <option>State</option>
          </select>
          <input type="text" placeholder="College Name" className="input" />
          <input type="text" placeholder="Address" className="input col-span-2" />
          <input type="text" placeholder="WhatsApp Number" className="input" />
          <input type="email" placeholder="Email" className="input" />
          {["Aadhar Card", "PAN Card", "10th Marksheet", "Passport Size Photo", "Upload Resume"].map((label) => (
            <div key={label} className="col-span-2">
              <label className="block text-gray-700 mb-1">{label} (Upload)</label>
              <input type="file" className="w-full border p-2 rounded-md" />
            </div>
          ))}
          <select className="input col-span-2">
            <option>Payment Mode</option>
            <option>Online Payment (UPI)</option>
          </select>
          <div className="col-span-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700 text-sm">I agree that payment once done will not be refundable in any case.</label>
          </div>
          <button className="col-span-2 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFrom;
