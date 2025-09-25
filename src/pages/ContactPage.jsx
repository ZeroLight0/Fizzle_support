function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f8f8f8]">
      <section className="w-full max-w-3xl mx-auto py-12 px-4 flex flex-col gap-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16A249] mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below or reach us
            directly.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-8">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border rounded-md p-3 focus:outline-[#16A249]"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border rounded-md p-3 focus:outline-[#16A249]"
                placeholder="you@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="border rounded-md p-3 focus:outline-[#16A249]"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#16A249] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#13913e] transition"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-t pt-6">
            <div className="flex flex-col gap-2 text-gray-700">
              <span className="font-semibold text-[#16A249]">Email:</span>
              <a href="mailto:support@fizzle.com" className="hover:underline">
                support@fizzle.com
              </a>
              <span className="font-semibold text-[#16A249] mt-2">Phone:</span>
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
              <span className="font-semibold text-[#16A249] mt-2">
                Address:
              </span>
              <span>123 Fizzle Lane, Sweet City, CA 90001</span>
            </div>
            <div className="flex flex-col gap-2 text-gray-700">
              <span className="font-semibold text-[#16A249]">
                Business Hours:
              </span>
              <span>Mon-Fri: 9am - 6pm</span>
              <span>Sat: 10am - 4pm</span>
              <span>Sun: Closed</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center justify-center bg-[linear-gradient(90deg,rgba(22,166,74,1)_0%,rgba(26,189,86,1)_95%)] py-12 px-4 w-full">
        <div className="flex justify-center text-center items-center flex-col gap-6 w-full max-w-2xl md:w-[60%]">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Join Our Sweet Community
          </h1>
          <p className="text-white text-xl">
            Follow us on social media for daily dessert inspiration, customer
            stories, and exclusive behind-the-scenes content. Be part of the
            Fizzle family!
          </p>
        </div>
        <div className="socials w-full max-w-3xl md:w-[69%] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center pt-6">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="social text-[#16A249] text-lg/7 bg-white rounded-sm p-3 px-7 font-[500] text-nowrap hover:bg-[#d8fde7] hover:shadow-md transition duration-300"
          >
            📘 Follow on Facebook
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="social text-[#16A249] text-lg/7 bg-white rounded-sm p-3 px-7 font-[500] text-nowrap hover:bg-[#d8fde7] hover:shadow-md transition duration-300"
          >
            📷 Follow on Instagram
          </a>
          <a
            href=""
            className="social text-[#16A249] text-lg/7 bg-white rounded-sm p-3 px-7 font-[500] text-nowrap hover:bg-[#d8fde7] hover:shadow-md transition duration-300"
          >
            🐦 Follow on Twitter
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
