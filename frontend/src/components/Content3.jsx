import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Content3 = () => {
  const [name, setName] = useState("");
  const [no, setNo] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      mobile: no,
      userType: type
    };

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className='bg-[rgb(249,250,251)] p-5 md:p-10'>
      <div className='text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-2xl md:text-3xl font-bold text-amber-500 pb-6'>Free Apprenticeship Programme</h1>
        <p className='text-base md:text-lg'>Students interested in the free apprenticeship programme must first attend a Google Meeting. Attendance is compulsory to join the programme.</p>
        <h6 className='font-semibold pt-4'>Important Note:</h6>
        <p className='text-sm md:text-base'>Please ensure you attend the meeting as part of the mandatory process before registration.</p>
      </div>

      <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-10 max-w-7xl mx-auto px-4'>
        {/* Graduate Card */}
        <Card className="w-full md:w-[45%] bg-[rgb(223,225,228)]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">For Graduates</CardTitle>
            <CardDescription>Timing: <span className='font-semibold text-black'>Every Saturday, 7-8 PM</span></CardDescription>
            <CardDescription>Meeting Link: <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' className='text-blue-700'>https://meet.google.com/upe-wpph-tpe</a></CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <Input placeholder="Email ID" className="bg-white" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Name" className="bg-white" onChange={e => setName(e.target.value)} />
                <Input placeholder="Mobile Number" className="bg-white" onChange={e => setNo(e.target.value)} />
                <Button className="bg-amber-500 hover:bg-amber-400" onClick={() => setType("Graduate")}>Confirm Attendance</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Undergraduate Card */}
        <Card className="w-full md:w-[45%] bg-[rgb(223,225,228)]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">For Undergraduates</CardTitle>
            <CardDescription>Timing: <span className='font-semibold text-black'>Every Saturday, 7-8 PM</span></CardDescription>
            <CardDescription>Meeting Link: <a href='https://meet.google.com/hmr-jjfb-bzv' className='text-blue-700'>https://meet.google.com/upe-wpph-tpe</a></CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <Input placeholder="Email ID" className="bg-white" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Name" className="bg-white" onChange={e => setName(e.target.value)} />
                <Input placeholder="Mobile Number" className="bg-white" onChange={e => setNo(e.target.value)} />
                <Button className="bg-amber-500 hover:bg-amber-400" onClick={() => setType("Undergraduate")}>Confirm Attendance</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Content3;
