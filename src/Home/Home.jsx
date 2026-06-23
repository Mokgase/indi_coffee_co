// import styles from './Style/home.modules.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import BaristaSection from '../BaristaSection/BaristaSection';
import About from '../About/About';
import Team from '../Team/OurTeam';
import Products from '../Products/Products';
// import StorySection from '../Components/StorySection'
import Cafe from '../Cafe/Cafe';
import Hero from '../Components/Hero';


const HomePage = () => {
    return (
      <div>
      {/* // <div className={styles.container}>  */}
     {/* <div className={`w-full h-full flex flex-col justify-center items-center ${styles.noHorizontalScroll}`}/>  */}
    <head>
        <title>Homepage</title>
        <meta name="Homepage" content="This is the Homepage as know as Landing page" />
    </head>
    <Hero/>
    <Cafe/>
    {/* <StorySection/>  */}
    <BaristaSection/>
    <About/>
    <Team/>
    <Products/>
    <Contact/>
    <Footer />
    </div>
  );
};

export default HomePage;
