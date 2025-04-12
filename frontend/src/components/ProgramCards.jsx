import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'

const ProgramCards = () => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10'>
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Web Development Training (MERN Stack)</CardHeader>
            <CardContent className="text-lg text-gray-500">Master MongoDB, Express, React, and Node.js with real-world projects and hands-on experience.</CardContent>
            <CardContent ><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
             <CardFooter>          
             <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Flutter Development Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Learn to build cross-platform mobile apps using Flutter with hands-on projects and real-world experience.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>  
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Java Development Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Gain expertise in Java programming, OOP concepts, and build real-world applications through hands-on experience.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Tech & IT Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Explore courses in data analytics, software development, digital marketing, cybersecurity, and IT support to enhance your tech skills.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
           <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Business & Finance Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Master accounting, consulting, entrepreneurship, leadership, and human resources with professional guidance.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Skilled Trades Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Learn carpentry, electrical work, plumbing, welding, or automotive repair with industry experts.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Offline
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'><Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Creative Industries Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Enhance your creativity in graphic design, photography, filmmaking, fashion design, or content creation.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Offline
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'><Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Education & Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Prepare for a career in teaching assistance, early childhood education, or e-learning development.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Offline
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Hospitality & Tourism Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Learn hotel management, culinary arts, travel consulting, or event planning from industry professionals.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Hybrid (Online & Offline)
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Logistics & Supply Chain Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Master transportation management, inventory control, and warehouse operations for a successful career.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'>  <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Environmental Sciences Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Develop skills in renewable energy, waste management, and sustainability consulting.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Legal Services Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Become a professional in paralegal studies, legal administration, or compliance training.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Online
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Public Services Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Engage in courses on community engagement, nonprofit management, social work, and public policy.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Hybrid (Online & Offline)
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
     <Card  className=" bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-xl font-semibold">Sports & Fitness Training</CardHeader>
            <CardContent className="text-lg text-gray-500">Build a career in personal training, sports management, or physiotherapy with expert guidance.</CardContent>
            <CardContent><span className='font-bold'>Duration:</span> 12 Month
                <br/>
                <span className='font-bold'>Mode:</span> Offline
            </CardContent>
            <CardFooter>          
            <a href='https://meet.google.com/hmr-jjfb-bzv?pli=1' target='_blank'> <Button className=" bg-orange-500  hover:bg-orange-600 p-5 cursor-pointer">Learn More</Button></a>
            </CardFooter>
    </Card> 
    </div>
  )
}

export default ProgramCards
