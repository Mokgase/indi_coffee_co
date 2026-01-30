import React from 'react';
import styles from '../Style/baristasection.module.css';
import catalogueBaristas from '../Utils/baristas';


const BaristaSection = () => {
  return (
    <div id='BaristaSection' className='w-full h-full'>
      <title>BaristaSection</title>
      <meta name="BaristaSection" content="This the Barista Section page"/>
    {/* <Script id="google_analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-ZLP3CMVLW0"></Script>
    <Script
      id="google_analytics"
      dangerouslySetInnerHTML={{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZLP3CMVLW0');
        `,
      }}
    /> */}
      <div className={styles.container}>
        <h1 className={styles.h1}>MEET YOUR BARISTAS</h1>
        <hr className={styles.line} />
        <div className={styles.images_grid}>
          {catalogueBaristas.map((barista, index) => (
            <div key={index} className={styles.barista_card}>
              <img
                src={barista.src}
                alt={barista.title}
                className={styles.grid_image}
                height={900}
                width={600}
                quality={100}
              />
              <div className={styles.barista_info}>
                <p className={styles.barista_name}>{barista.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaristaSection;

