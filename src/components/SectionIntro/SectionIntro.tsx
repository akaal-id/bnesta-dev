import Image from "next/image";
import styles from "./SectionIntro.module.css";

export function SectionIntro() {
  return (
    <section className={styles.intro}>
      {/* Left Side: Square Image */}
      <div className={styles.heroImage}>
        <Image
          src="/images/Intro-1.jpg"
          alt="BNesta aerial view"
          width={720}
          height={720}
          className={styles.image}
          priority
        />
      </div>

      {/* Right Side: Content */}
      <div className={styles.inner}>
        <p className={styles.eyebrow}> BNesta Villa </p>
        <h2 className={styles.heading}>Living Space</h2>
        <span className={styles.divider} />
        <p className={styles.description}>
          Shaped around light, texture, and calm, each villa supports slow days
          and simple routines. BNesta offers a quiet way of living, where you
          can rest at your own pace and stay connected to your surroundings.
          With privacy at the center, your villa becomes a personal space to
          breathe, reset, and recover.
        </p>
        <button className={styles.outlineButton} type="button">
          Discover more
        </button>
      </div>
    </section>
  );
}