import classes from "./Hero.module.css";
import {Link} from "react-router-dom";


function Hero() {
  return (
    <>
      <section className={`${classes.hero} h-115`}>
        <div className="w-full bg-[#faf3eada] z-11 h-full flex flex-col  items-center text-center gap-5 px-4">
          <h1
            className={`${classes.mainText} text-5xl md:text-6xl lg:text-7xl font-bold mt-25`}
          >
            Welcome to <span className={`${classes.mainSpan}`}>Fizzle</span>
          </h1>
          <p
            className={`${classes.paragraghText} text-lg md:text-xl lg:text-2xl max-w-2xl`}
          >
            Delicious gluten-free desserts that don't break the bank. Safe,
            affordable, and absolutely delightful.
          </p>
          <div
            className={`${classes.buttons} flex gap-6 mt-4 flex-col sm:flex-row w-full sm:w-auto items-center justify-center  `}
          >
            <Link to="/shop"
              className={`${classes.shop} text-lg px-8.5 py-2 font-[600] sm:w-fit w-full rounded-sm `}
            >  
            Shop Our Desserts</Link>
            
            <Link to="/about"
              className={`${classes.about} text-lg px-8.5 py-2 font-[600] sm:w-fit w-full rounded-sm`}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
