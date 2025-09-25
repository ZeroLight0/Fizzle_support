import NavBar from "../components/NavBar/NavBar.jsx";

function About() {
  return (
    <>
      <section className="aboutFizzle flex flex-col items-center text-center bg-[#FFFAF0] px-6">
        <div className="flex flex-col items-center text-center pt-10 space-y-6 w-full max-w-2xl">
          <h1 className="text-5xl/12 font-bold text-[#0B3224] ">
            About Fizzle
          </h1>
          <p className="text-xl/7 font-[400] text-[#4E977D] ">
            We're passionate about creating delicious gluten-free desserts that
            everyone can enjoy, without breaking the budget or compromising on
            taste.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-16 w-full">
          <div className="flex flex-col justify-center items-start text-left gap-4">
            <h2 className="text-3xl font-[600] text-[#0B3224] mb-2">
              Our Story
            </h2>
            <p className="text-[#4E977D] text-base/6 font-[400]">
              Founded in 2020, Fizzle began as a small kitchen experiment to
              create affordable gluten-free desserts that didn't taste like
              cardboard. We believe that dietary restrictions shouldn't mean
              sacrificing flavor or paying premium prices.
            </p>
            <p className="text-[#4E977D] text-base/6 font-[400]">
              Today, we're proud to serve thousands of customers who trust us to
              deliver consistent quality, safety, and affordability in every
              bite. Our certified gluten-free facility ensures complete peace of
              mind for those with celiac disease and gluten sensitivities.
            </p>
          </div>
          <div className=" bg-white rounded-md border-1 border-[#E5E7EB] p-8 shadow-md flex flex-col justify-center items-start text-left">
            <h3 className="text-2xl/8 font-[600] text-[#0B3224] mb-4">
              Our Values
            </h3>
            <ul>
              <li className="text-base/6 font-[400] text-[#4E977D] list-disc list-inside mb-3">
                Affordability without compromise
              </li>
              <li className="text-base/6 font-[400] text-[#4E977D] list-disc list-inside mb-3">
                100% certified gluten-free safety
              </li>
              <li className="text-base/6 font-[400] text-[#4E977D] list-disc list-inside mb-3">
                Exceptional customer support
              </li>
              <li className="text-base/6 font-[400] text-[#4E977D] list-disc list-inside">
                Community-focused approach
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="quality mt-10 px-4 py-10 w-full flex flex-col items-center bg-[#FFF2E0] text-center space-y-8">
        <h3 className=" text-3xl/9 text-[#0B3224] font-[600] ">
          Quality & Safety
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="w-16 h-16 bg-[#16A249] rounded-full flex justify-center items-center text-3xl shadow-md text-white mb-2">
              ✓
            </p>
            <p className="text-[#0B3224] font-[600] ">Certified Facility</p>
            <p className="font-[400] text-[#4E977D] text-sm/5">
              Our dedicated gluten-free facility is certified and regularly
              audited for safety.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="w-16 h-16 bg-[#16A249] rounded-full flex justify-center items-center text-3xl shadow-md text-white mb-2">
              🔬
            </p>
            <p className="text-[#0B3224] font-[600] ">Tested Products</p>
            <p className="font-[400] text-[#4E977D] text-sm/5">
              Every batch is tested to ensure it meets our strict gluten-free
              standards.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <p className="w-16 h-16 bg-[#16A249] rounded-full flex justify-center items-center text-3xl shadow-md text-white mb-2">
              ❤️
            </p>
            <p className="text-[#0B3224] font-[600] ">Made with Care</p>
            <p className="font-[400] text-[#4E977D] text-sm/5">
              Hand-crafted with premium ingredients and attention to every
              detail.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
