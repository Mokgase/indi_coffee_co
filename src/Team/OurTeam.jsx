import aboutus from '../../public/Assets/images/aboutUs.png';
import styles from '../Style/ourteam.module.css';
import Jabulani from '../../public/Assets/images/Jabulani.png';
import Sean from '../../public/Assets/images/Sean.png';
import Tshepiso from '../../public/Assets/images/Tshepiso.png';


const Team = () => {
  return (
        <div id='team' className='w-full h-full'>
        <div className={styles.container}>
              <h1 className={styles.h1}>Meet <span className={styles.color}>our </span>Team</h1>
            <hr className={styles.line} />
          <div className={styles.columns}>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h2 className ={styles.h2}></h2>
            </div>
            <div className={styles.text}>
              <p className={styles.p1}>
                Jabulani Skhosana has been working as a Barista at Indi Coffee Co, 
                where he has developed strong skills in coffee preparation, customer service, and maintaining consistent quality in every cup served. 
                Through daily hands-on experience and dedication to his craft, he has grown into a reliable and confident member of the team, 
                known for his attention to detail and passion for creating excellent coffee experiences for customers.
                <br/>
                <br/>
                Over time, Jabulani has progressed beyond the basics of barista work and has become an expert in his field, 
                mastering advanced brewing techniques and refining his understanding of coffee profiles and flavor balance. 
                He is now expanding his skill set further by learning how to bake pastries, 
                adding a new dimension to his expertise and showing a strong commitment to growing within the coffee and hospitality industry.
                <br/>
                <br/>
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <img src={Jabulani} alt="logo" width={310} height={400} placeholder="blur" className="w-[80%] h-auto" />
            <div className={styles.text}>
              <div className={styles.subheading}>
                <p className={styles.p1}>Jabulani Skhosana</p>
                <p className={styles.p1}>Barista</p>
              </div>
            </div>
          </div>
          </div>
          <div className={styles.columns}>
          <div className={styles.column1a}>
            <div className={styles.heading}>
              <h2 className ={styles.h2}></h2>
            </div>
            <div className={styles.text}>
              <p className={styles.p1}>
                Sean Van der Deen has worked as a barista at Indi Coffee Co, 
                where he has been responsible for preparing and serving a variety of coffee beverages to customers in a fast-paced café environment. 
                His role has included crafting espresso-based drinks, maintaining consistency in quality and presentation, 
                and ensuring that each customer receives a well-prepared and timely order. 
                He has also contributed to maintaining a clean and organized workspace, supporting smooth daily operations.
                <br/>
                <br/>
                During his time at Indi Coffee Co, Sean has developed strong customer service skills, 
                often engaging with regulars and new customers in a friendly and professional manner. 
                He has shown reliability in handling peak-hour rushes and working effectively as part of a team to keep service efficient. 
                His experience as a barista has helped him build attention to detail, time management, and a steady, 
                calm approach to high-pressure service environments.
                <br/>
                <br/>
              </p>
            </div>
          </div>
          <div className={styles.column2a}>
            <img src={Sean} alt="logo" width={310} height={400} placeholder="blur" className="w-[80%] h-auto" />
            <div className={styles.text}>
              <div className={styles.subheading}>
                <p className={styles.p1}>Sean Van der Deen</p>
                <p className={styles.p1}>Barista</p>
              </div>
            </div>
          </div>
          </div>
          <div className={styles.columns}>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h2 className ={styles.h2}></h2>
            </div>
            <div className={styles.text}>
              <p className={styles.p1}>
                Tshepiso Ramogayana has built solid experience as a Barista at Indi Coffee Co, 
                where she has been responsible for preparing a variety of coffee beverages with consistency and attention to detail. 
                In her role, she has developed strong technical skills in espresso extraction, milk texturing, and maintaining equipment, 
                ensuring that each cup meets the café’s quality standards.
                <br/>
                <br/>
                Beyond drink preparation, Tshepiso has contributed to creating a welcoming customer experience through efficient service and clear communication with guests. 
                Her time at Indi Coffee Co has also strengthened her ability to work in a fast-paced environment, 
                manage peak-hour demand, and maintain cleanliness and organization behind the counter while supporting overall team operations.
                <br/>
                <br/>
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <img src={Tshepiso} alt="logo" width={310} height={400} placeholder="blur" className="w-[80%] h-auto" />
            <div className={styles.text}>
              <div className={styles.subheading}>
                <p className={styles.p1}>Tshepiso Ramogayana</p>
                <p className={styles.p1}>Barista</p>
              </div>
            </div>
          </div>
          </div>
         </div>
         </div>
  );
};

export default Team;
