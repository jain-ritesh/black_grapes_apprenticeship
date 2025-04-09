import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Privacy = () => {
  return (
    <div className="w-full bg-gray-100">
      <Nav className='absolute' />

      <div className="flex justify-center relative items-center px-4 py-16">
        <div className="w-full max-w-4xl bg-gray-200 rounded-xl shadow-sm p-10 z-50 mt-10">
          <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center">Privacy Policy</h2>

          <section className="space-y-6 text-lg text-black leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Information We Collect</h3>
              <p><strong>Personal Information:</strong> We collect personal details such as your name, email address, shipping address, phone number, and payment information when you make a purchase, create an account, or contact us at BlackGrapes Softech.</p>
              <p><strong>Non-Personal Information:</strong> We may collect non-personal data such as browser type, operating system, and browsing behavior to improve our website and services.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">2. How We Use Your Information</h3>
              <p><strong>To Process Orders:</strong> We use your personal information to process and fulfill your orders at BlackGrapes Softech.</p>
              <p><strong>To Communicate:</strong> We use your contact information to send you updates about your order, respond to inquiries, and send promotional materials if you have opted in.</p>
              <p><strong>To Improve Our Services:</strong> We analyze non-personal information to understand user behavior and enhance our website’s performance.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Information Sharing</h3>
              <p><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering orders.</p>
              <p><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">4. Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">5. Your Rights</h3>
              <p><strong>Access and Correction:</strong> You have the right to access and correct your personal information. You can update your account details through our website.</p>
              <p><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails by following the unsubscribe instructions in the emails.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">6. Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be indicated at the top of the policy.</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Privacy
