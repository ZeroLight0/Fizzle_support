function JoinUs() {
  return (
    <>
      <section className="flex flex-col gap-6 items-center justify-center bg-[linear-gradient(90deg,rgba(22,166,74,1)_0%,rgba(26,189,86,1)_95%)] py-16 pt-22 px-6 w-full">
        <div className="flex justify-center text-center items-center flex-col gap-6 w-[60%]">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Join Our Sweet Community
          </h1>
          <p className="text-white text-xl">
            Follow us on social media for daily dessert inspiration, customer
            stories, and exclusive behind-the-scenes content. Be part of the
            Fizzle family!
          </p>
        </div>
        <div className="socials w-[64%] grid grid-cols-3 grid-rows-1 gap-6 text-center pt-6">
          <a
            href=""
            className="social text-[#16A249] text-lg/7 bg-white rounded-sm p-3 px-7 font-[500] text-nowrap hover:bg-[#d8fde7] hover:shadow-md transition duration-300"
          >
            📘 Follow on Facebook
          </a>
          <a
            href=""
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
        <div className="support bg-[#3cc26dce] rounded-lg p-12 w-[53%] flex flex-col gap-4 justify-center items-center mt-5 text-center">
          <h3 className="text-white font-[600] text-2xl/8">Need Support?</h3>
          <p className="text-white font-[400] text-base/6 text-wrap">
            Our customer support team is here to help with any questions about
            our products, ingredients, or your orders. We're committed to your
            satisfaction and safety.
          </p>
          <button className="text-[#16A249] text-sm/5 bg-white rounded-sm p-3 px-8 font-[500] text-nowrap mt-2 cursor-pointer hover:bg-[#d8fde7] hover:shadow-md transition duration-300">
            Contact Support Team
          </button>
        </div>
      </section>
    </>
  );
}

export default JoinUs;
