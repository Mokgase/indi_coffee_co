
import { useRef } from 'react';
import styles from '../Style/contactus.module.css';
import Button from '../Components/Button';
import emailjs from '@emailjs/browser';



const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aiael5j', 
        'template_gtluvs6', 
        form.current,
        'JLyAuDRbEpuDJRgII',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully")
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return ( 
      <div id='contact' className='w-full h-full'>
      {/* <Script id="google_analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-ZLP3CMVLW0"></Script> */}
      {/* <Script
        id="google_analytics"
        dangerouslySetInnerHTML={{
          __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZLP3CMVLW0');
          `,
        }}
      />   */}
      <div className={styles.container}>
        <h1 className={styles.h1}>Let's Have Coffee</h1>
        <div className={styles.text}>
            <p className={styles.p1}>
              Send us a message and let's get in touch.
            </p>
        </div>
          <form className={styles.formcontainer} ref={form} onSubmit={sendEmail}> 
              
                <div className={styles.column1}>
                  <label className={styles.labels}>Name</label>
                  <input 
                  required
                  type="text" 
                  name="user_name"
                  id='name'
                  placeholder='Full name'
                  className={styles.inputs}
                   />
                  <label className={styles.labels}>Province</label>
                  <input 
                  required
                  type="dropdown" 
                  name="province"
                  id='province'
                  placeholder='Province'
                  className={styles.inputs}
                   />
                  <label className={styles.labels}>SEND MESSAGE</label>
                  <textarea
                    className={styles.textarea}
                    required
                    name='message'
                    placeholder='Send Message'
                  />
                </div>
                <div className={styles.column2}>
                  <label className={styles.labels}>Email</label>
                  <input 
                    required
                    type="email" 
                    name="user_email" 
                    id='user_email'
                    placeholder='Email'
                    className={styles.inputs}
                    />
                  <label className={styles.labels}>Mobile number</label>
                  <input 
                    required
                    type="numbers" 
                    name="mobile_number"
                    id='mobile'
                    placeholder='Mobile number'
                    className={styles.inputs}
                   />
                </div>
                <div className={styles.column3}>
                  <div className={styles.button}>
                  <Button type={'submit'} value={'Send'} text={'Send'}/>
                  </div>
                </div>
            </form> 
    </div>
    </div>
  )
};

export default Contact;
              
