import styles from "./Hero.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.media}
        src="/images/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/villa-hero.png"
      />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span>Welcome to BNesta</span>
          </p>
          <h1 className={styles.title}>
            <span style={{ fontStyle: "italic" }}>Be at Ease. Be Authentic.</span> <br/> 
            <span style={{ fontStyle: "normal" }}> Be at Your Nest.</span>
          </h1>
        </div>
        <div className={styles.actions}>
          <button type="button" className={buttonStyles.bookButton}>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}