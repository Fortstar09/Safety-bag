import Action from "@/components/Action";
import Choice from "@/components/Choice";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GiftCards from "@/components/GiftCards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <div className="bg-white dark:bg-bgDark2">
      <Navbar />
      <Hero />
      <GiftCards />
      <Services />
      <Features />
      <Stats />
      <Reviews />
      <Choice />
      <Faq />
      <Action />
      <Footer />
    </div>
  );
};

export default Home;
