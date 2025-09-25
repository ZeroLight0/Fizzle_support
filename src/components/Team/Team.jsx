import classes from "./Team.module.css";

function Team() {
  return (
    <>
      <section className="bg-[#fdebd2] py-21 px-6 w-full flex flex-col items-center justify-center">
        <div className="flex justify-center text-center items-center flex-col gap-6 w-full max-w-xl md:w-[55%]">
          <h1
            className={`${classes.mainText} text-3xl md:text-4xl lg:text-5xl font-bold`}
          >
            Meet Our Support Team
          </h1>
          <p className={`${classes.paragraghText} text-xl`}>
            Our dedicated team is here to support you every step of the way.
            From product questions to dietary advice, we're always ready to
            help.
          </p>
        </div>
        <div
          className={`${classes.members} w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center pt-17`}
        >
          <div
            className={`${classes.member} flex p-4 flex-col bg-white rounded-md border-1 hover:-translate-y-2 transition-all duration-300`}
          >
            {/* <img src="" alt="" /> */}
            <p className="text-6xl pb-5">👩‍💼</p>
            <h3 className="text-2xl/8 font-[600] text-[#0B3224] pb-1">
              Jane Doe
            </h3>
            <p className="text-base/6 font-[600] text-[#16A249]">
              Head of Customer Success
            </p>
            <p className="text-base/6.5 font-[400] text-[#4E977D] pt-4">
              Sarah ensures every customer feels heard and supported. With her
              background in nutrition, she helps customers navigate their
              gluten-free journey.
            </p>
          </div>

          <div
            className={`${classes.member} flex p-4 flex-col bg-white rounded-md border-1 hover:-translate-y-2 transition-all duration-300`}
          >
            {/* <img src="" alt="" /> */}
            <p className="text-6xl pb-5">👨‍🍳</p>
            <h3 className="text-2xl/8 font-[600] text-[#0B3224] pb-1">
              Marcus Rodriguez
            </h3>
            <p className="text-base/6 font-[600] text-[#16A249]">
              Lead Baker & Quality Assurance
            </p>
            <p className="text-base/6.5 font-[400] text-[#4E977D] pt-4">
              Marcus oversees our baking process and quality control. His 15
              years of experience guarantee consistent, delicious results.
            </p>
          </div>

          <div
            className={`${classes.member} flex p-4 flex-col bg-white rounded-md border-1 hover:-translate-y-2 transition-all duration-300`}
          >
            {/* <img src="" alt="" /> */}
            <p className="text-6xl pb-5">👩‍💻</p>
            <h3 className="text-2xl/8 font-[600] text-[#0B3224] pb-1">
              Emma Thompson
            </h3>
            <p className="text-base/6 font-[600] text-[#16A249]">
              Customer Support Specialist
            </p>
            <p className="text-base/6.5 font-[400] text-[#4E977D] pt-4">
              Emma is your first point of contact for any questions or concerns.
              She's passionate about making gluten-free accessible to everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
