import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Terms_Condition = () => {
  return (
    <div className="w-full bg-gray-100">
      <Nav />

      <div className="flex justify-center items-center px-2 py-16 ">
        <div className="w-full max-w-4xl bg-gray-200 rounded-xl shadow-sm p-10 z-50 mt-10">
          <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center">Terms & Conditions</h2>

          <section className="space-y-6 text-lg text-black leading-relaxed">
            <p><strong>A.</strong> All services provided by <strong>Black Grapes Group</strong> are non-refundable. Once payment is made for our internship services, it is final and non-refundable. Please review the service details carefully before making a commitment.</p>

            <p><strong>B.</strong> This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011, which requires publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of domain name <strong>[Enter domain name]</strong> (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”).</p>

            <p><strong>C.</strong> The Platform is owned by <strong>Black Grapes Softech</strong>, a company incorporated under the Companies Act, 1956, with its registered office at <em>252-F/H Scheme No 54, Vijaynagar, Indore-452010, Madhya Pradesh, India</em>, email: <a href="mailto:blackgrapes.arpitjain@gmail.com" className="text-blue-600 underline">blackgrapes.arpitjain@gmail.com</a> (hereinafter referred to as "Platform Owner", “we”, “us”, “our”).</p>

            <p><strong>D.</strong> Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform, including the applicable policies which are incorporated herein by way of reference. If you transact on the Platform, you shall be subject to the policies that are applicable to the Platform for such a transaction. By mere use of the Platform, you shall be contracting with the Platform Owner and these terms and conditions, including the policies, constitute your binding obligations with the Platform Owner.</p>

            <p><strong>E.</strong> For the purpose of these Terms of Use, wherever the context so requires, "you", “your” or "user" shall mean any natural or legal person who has agreed to become a user/buyer on the Platform.</p>

            <p><strong>F.</strong> ACCESSING, BROWSING, OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.</p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">General Terms</h3>

            <ul className="list-decimal list-inside space-y-2">
              <li>To access and use the Services, you agree to provide true, accurate, and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform.</li>
              <li>Neither we nor any third parties provide any warranty or guarantees as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials offered on this website or through the Services, for any specific purpose.</li>
              <li>Your use of our Services and the Platform is solely and entirely at your own risk and discretion, for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements.</li>
              <li>The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents.</li>
              <li>You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws.</li>
              <li>You agree to pay us the charges associated with availing of the Services.</li>
              <li>You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal, or forbidden by these Terms, or Indian or local laws that might apply to you.</li>
              <li>You agree and acknowledge that the website and the Services may contain links to other third-party websites. On accessing these links, you will be governed by the terms of use, privacy policy, and such other policies of such third-party websites.</li>
              <li>You understand that upon initiating a transaction for availing of the Services, you are entering into a legally binding and enforceable contract with the Platform Owner.</li>
              <li>You shall indemnify and hold harmless Platform Owner, its affiliates, group companies, and their respective officers from any claim or demand arising out of your breach of these Terms of Use, Privacy Policy, or other Policies.</li>
              <li>In no event will the Platform Owner be liable for any indirect, consequential, incidental, or punitive damages, including damages for loss of profits or data arising from the use of the Services.</li>
              <li>Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if prevented by a force majeure event.</li>
              <li>These Terms shall be governed by and construed in accordance with the laws of India.</li>
              <li>All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in <strong>Indore, Madhya Pradesh</strong>.</li>
              <li>All communications related to these Terms must be directed to us using the contact information provided on this website.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Terms_Condition
