import React from 'react'

const Contact = () => {
  
  return (
   <div className="min-h-screen px-4 py-10 flex flex-col items-center" style={{ backgroundColor: "#E6E6FA" }}>
      <h2 className="text-3xl font-semibold mb-6" style={{ color: "#452c63" }}>Contact Us</h2>
      
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">

        {/* ---------------Contact Info--------------------------- */}
        <div className="bg-gray-50 w-full lg:w-1/2 p-6 rounded border border-gray-200">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2 text-[#DB4444]">
              <span className="text-2xl">📞</span>
              <h3 className="text-xl font-bold" style={{ color: "#452c63" }}>Get in Touch</h3>
            </div>
            <p className="text-sm text-gray-600">
              Support Center <br />
              Need help? Reach out to us for any complaint-related query or technical issue.
              We're here to assist you 24x7. <br />
              <strong>Phone:</strong> +880811122222
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2 text-[#DB4444]">
              <span className="text-2xl">✉️</span>
              <h3 className="text-xl font-bold" style={{ color: "#452c63" }}>Write To Us</h3>
            </div>
            <p className="text-sm text-gray-600">
              Fill out our form and we will contact you within 24 hours. <br />
              <strong>Emails:</strong> hostelhelpdesk@cmshub.in
            </p>
          </div>
        </div>

        {/*--------------------Contact Form-------------------- */}
        <div className="bg-white w-full lg:w-1/2 p-6 rounded border border-gray-200">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="12"
              className="w-full px-4 py-2 border rounded-md"
            />

            <button
              type="submit"
              className="bg-[#DB4444] text-white px-6 py-2 rounded hover:bg-red-600 transition" style={{ backgroundColor: "#452c63" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact