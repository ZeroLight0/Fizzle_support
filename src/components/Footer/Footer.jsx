function Footer() {
  return (
    <>
      <footer className="w-full bg-[#0b3324] flex flex-col justify-center items-center text-center py-12 px-6 ">
        <div className="flex flex-col text-center ">
          <h2 className="text-3xl font-bold text-white">Fizzle</h2>
          <p className="text-base font-[400] text-[#c9d1b4] mt-4">
            Making gluten-free desserts accessible, affordable, and absolutely
            delicious.
          </p>
        </div>
        <div className="flex gap-6 justify-center items-center my-6 text-center">
          <a href="" className="font-[400] text-white text-sm hover:text-[#17a34a] transition-all duration-300">
            Privacy Policy
          </a>
          <a href="" className="font-[400] text-white text-sm hover:text-[#17a34a] transition-all duration-300">
            Terms of Service
          </a>
          <a href="" className="font-[400] text-white text-sm hover:text-[#17a34a] transition-all duration-300">
            Contact
          </a>
        </div>
        <p className="copywright font-light text-sm text-[#a8c2bf]">
          © 2024 GammaFizzle. All rights reserved. Certified gluten-free
          facility.
        </p>
      </footer>
    </>
  );
}

export default Footer;
