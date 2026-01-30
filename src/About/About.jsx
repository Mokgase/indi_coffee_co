import aboutus from '../../public/Assets/images/aboutus.jpg';
import styles from '../Style/aboutus.module.css';


const About = () => {
  return (
        <div id='about' className='w-full h-full'>
        <div className={styles.container}>
              {/* <h1 class ={styles.h1}>ABOUT</h1> */}
            <hr className={styles.line}/>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h2 class ={styles.h2}></h2>
            </div>
            <div className={styles.text}>
              <p class={styles.p1}>
                Indi Cofee Co. is a fast-paced specialty coffee bar built for people who move with intention. 
                Whether you're heading into a meeting, hitting the gym, or just passing through, we serve high-quality coffee without the wait. 
                No pretentious menus. No slow lines. Just good coffee, done properly and handed to you with respect for your time.
                <br/>
                <br/>
                We believe in stripping coffee back to what matters taste, efficiency, and experience. 
                Our team is trained to deliver precision brews with zero fuss, using quality beans and a streamlined setup that keeps things simple. 
                Spoke is more than a coffee stop. It’s a moment in your day that works as hard as you do.
                <br/>
                <br/>
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <img src={aboutus} alt="logo" width={310} height={400} placeholder="blur" className="w-[80%] h-auto" />
            <div className={styles.text}>
              <p className={styles.p1}>Founded by</p> 
              <p className={styles.p1}>Thapelo Mmakola &</p> 
              <p className={styles.p1}>Thabang Mmakola</p>
            </div>
          </div>
         </div>
         </div>
  );
};

export default About;
