import Image from "next/image";
import styles from "./SiteFooter.module.css";
// 1. Import the specific social icons from lucide-react
import { 
  ChevronRight, 
  Mail, 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Linkedin
} from "lucide-react";

const quickLinks = ["Featured Villa", "Common Spaces", "Read Journal"];
const legalLinks = ["About BNesta", "Explore Gallery"];
const ctaLinks = [
  { Label: "BWorks" },
  { Label: "BFriends" },
  { Label: "BLive" }
];

// 2. We map the string labels to the actual React components
const socialIcons = [
  { Label: "Facebook", Icon: Facebook },
  { Label: "Instagram", Icon: Instagram },
  { Label: "Linkedin", Icon: Linkedin }
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBar}>
        <span className="inline-flex items-center gap-4">
          Visit BLife Ecosystem
          <ChevronRight className="w-4 h-4" />
        </span>
        <span className={styles.ctaLink}></span>
        {ctaLinks.map((link) => (
          <a key={link.Label} href="#" className={styles.ctaLink}>
            {link.Label}
          </a>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.brand}>
          <Image
            src="/images/bnesta-logo.png"
            alt="BNesta logo"
            width={112}
            height={29}
          />
          <p className={styles.address}>
            <a href="https://www.google.com/maps/place/BNesta/@-8.6749497,115.1732949,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd2475043efd497:0xc3b216db125d7e35!8m2!3d-8.6749497!4d115.1758698!16s%2Fg%2F11xp66zz1l?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">
              Jl. Tunjung I, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80117
            </a>
          </p>
          <div className={styles.contact}>
            <a href="https://wa.me/+62817797908" className="inline-flex items-center gap-4">
              <MessageSquare className="w-4 h-4" />
              +62 817-797-908
            </a>
            <a href="mailto:bnesta.bali@gmail.com" className="inline-flex items-center gap-4">
              <Mail className="w-4 h-4" />
              bnesta.bali@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p className={styles.columnHeading}>Quick Links</p>
          <div className={styles.linkList}>
            {quickLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.columnHeading}>Legal</p>
          <div className={styles.linkList}>
            {legalLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.newsletter}>
          <h5 className={styles.newsletterTitle}>
            <em>Get a offer<span className="font-semibold"> newsletter</span></em>
          </h5>
          <div className={styles.inputRow}>
            <input type="email" placeholder="Enter your email" />
            <button type="button">
              Subscribe<ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.socialIcons}>
          {/* 3. Render the Icon component stored in the object */}
          {socialIcons.map((item) => (
            <a key={item.Label} href="#" className={styles.socialIcon}>
              <item.Icon size={20} />
            </a>
          ))}
        </div>
        <div className={styles.copyrightText}>
          2025 © BNesta Bali. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}