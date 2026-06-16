import styles from '../Style/hero.module.css';

const Hero = () => {
  return (
    <div id='hero' className={styles.page}>
      <div className={styles.container}>
        <div className={styles.text_side}>
          <p className={styles.tag}>Specialty Coffee</p>
          <h1 className={styles.title}>
            INDI<br />COFFEE<br />CO
          </h1>
          <p className={styles.tagline}>Premium coffee by people, for people.</p>
          <a href="#products" className={styles.cta_btn}>Shop Now</a>
        </div>

        <div className={styles.video_side}>
          <div className={styles.video_wrapper}>
            <iframe
              className={styles.video_frame1}
              allow="fullscreen;autoplay"
              allowFullScreen
              src="https://streamable.com/e/fysfqf?autoplay=1&nocontrols=1"
            />
          </div>
          <div className={styles.video_wrapper}>
            <iframe
              className={styles.video_frame2}
              allow="fullscreen;autoplay"
              allowFullScreen
              src="https://streamable.com/e/fi77hn?autoplay=1&nocontrols=1"
            />
          </div>
          <div className={styles.video_wrapper}>
            <iframe
              className={styles.video_frame3}
              allow="fullscreen;autoplay"
              allowFullScreen
              src="https://streamable.com/e/19xeth?autoplay=1&nocontrols=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
