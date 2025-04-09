import React from 'react'
import { Card } from './ui/card'

const Content6 = () => {
  return (
    <div className="px-4 py-10">
      <div className="bg-[rgb(219,234,254)] px-4 sm:px-10 py-10 rounded-lg">
        <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold text-center mb-4">
          Apprenticeship Programs
        </h1>
        <p className="text-base sm:text-xl text-center mb-8">
          Discover our latest Apprenticeship Programs designed to enhance your skills in MERN <br className="hidden sm:inline" />
          stack, Java, and Flutter development.
        </p>

        <div className="bg-white px-4 sm:px-10 py-8 rounded-xl max-w-5xl mx-auto shadow-md">
          <h5 className="text-center text-2xl sm:text-3xl font-bold text-blue-500 mb-8">
            Available Programs
          </h5>
          <div className="space-y-4 text-[16px] sm:text-lg">
            <p>📌 <strong>Tech & IT:</strong> Data analytics, software development, digital marketing, cybersecurity, IT support.</p>
            <p>📌 <strong>Business & Finance:</strong> Accounting, consulting, entrepreneurship, leadership training, human resources.</p>
            <p>📌 <strong>Healthcare:</strong> Nursing, pharmacy, allied health, medical coding, caregiving.</p>
            <p>📌 <strong>Skilled Trades:</strong> Carpentry, electrical work, plumbing, welding, automotive repair.</p>
            <p>📌 <strong>Creative Industries:</strong> Graphic design, photography, filmmaking, fashion design, content creation.</p>
            <p>📌 <strong>Education & Training:</strong> Early childhood education, teaching assistance, e-learning development.</p>
            <p>📌 <strong>Hospitality & Tourism:</strong> Hotel management, culinary arts, travel consulting, event planning.</p>
            <p>📌 <strong>Logistics & Supply Chain:</strong> Transportation management, inventory control, warehouse operations.</p>
            <p>📌 <strong>Environmental Sciences:</strong> Renewable energy, waste management, sustainability consulting.</p>
            <p>📌 <strong>Legal Services:</strong> Paralegal studies, legal administration, compliance training.</p>
            <p>📌 <strong>Public Services:</strong> Community engagement, nonprofit management, social work, public policy.</p>
            <p>📌 <strong>Sports & Fitness:</strong> Personal training, sports management, physiotherapy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content6;
