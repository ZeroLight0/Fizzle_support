import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Team from "../components/Team/Team.jsx";
import JoinUs from "../components/JoinUs/JoinUs.jsx";
import Footer from "../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <Hero />
      <Team />
      <JoinUs />
      <Footer />
    </>
  );
}

export default HomePage;
