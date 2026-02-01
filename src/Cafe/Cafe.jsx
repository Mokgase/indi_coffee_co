import cafe from '../../public/Assets/images/cafe.png';
import styles from '../Style/cafe.module.css';


const Cafe = () => {
  return (
        <div id='cafe' className='w-full h-full'>
        <div className={styles.container}>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h2 class ={styles.h2}></h2>
            </div>
            <div className={styles.text}>
                <h3 className={styles.h3}>
                    Atterbury Boulevard Centre
                </h3>
                <h3 className={styles.h3}>
                    Gauteng, Pretoria
                </h3>
                <p className={styles.p1}>
                    Tucked within the lively Atterbury Boulevard Centre in Pretoria, South Africa, Indi Coffee Co is more than just a café it's a gentle pause in your day. 
                    Here, the air carries the warm aroma of freshly ground beans, mingling with kind words and soft morning chatter. 
                    Each cup feels like a crafted moment creamy, smooth, and balanced best enjoyed alongside a buttery croissant while the world rushes on outside. 
                    It’s a quiet ritual, a scenic sip of calm in the middle of the city.
                </p>
            </div>
          </div>
          <div className={styles.column2}>
            <a
              href='https://maps.app.goo.gl/eq9VPqg2TicU2udY7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={cafe} alt="logo" width={310} height={400} placeholder="blur" radius={40} className="w-[80%] h-auto" />
            </a>
          </div>
          <div className={styles.column3}>
            <p className={styles.p1}>
                Cnr Manitoba and, Atterbury Rd,
                <br/> 
                <br/>
                Faerie Glen, Pretoria, 0082
                <br/> 
                <br/>
                Monday - Sun: 06:00 -18:00
                <br/> 
                <br/>
                083 765 2005
                <br/> 
                <br/>
                View on Google Maps 
            </p>
          </div>
         </div>
         </div>
  );
};

export default Cafe;
