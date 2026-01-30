// import styles from './Style/home.modules.css';
import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';
import BaristaSection from './BaristaSection/BaristaSection';
import About from './About/About';
// import StorySection from './Components/StorySection'
// import CTASection from './Components/CTASection';
// import Hero from './Components/Hero';


const HomePage = (Component, pageProps ) => {
    return (  
      <div>
      {/* // <div className={styles.container}>  */}
     {/* <div className={`w-full h-full flex flex-col justify-center items-center ${styles.noHorizontalScroll}`}/>  */}
    <head>
        <title>Homepage</title>
        <meta name="Homepage" content="This is the Homepage as know as Landing page" />
    </head>
    {/* <Hero/>
    <StorySection/>  */}
    <BaristaSection/>
    <About/>
    <Contact/>
    {/* <Footer />  */}
    </div>
  );
};

export default HomePage;
