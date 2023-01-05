import "./App.css";
import Header from "./components/HeaderComponents/Header";
import Nav from "./components/NavComponents/Nav";
import About from "./components/AboutComponents/About";
import Experience from "./components/ExperienceComponents/Experience";
import Services from "./components/ServicesComponents/Services";
import Portfolio from "./components/PortfolioComponents/Portfolio";
import Testimonials from "./components/TestimonialsComponents/Testimonials";
import Contact from "./components/ContactComponents/Contact";
import Footer from "./components/FooterComponents/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
