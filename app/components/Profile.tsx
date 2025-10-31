// di app/components/Profile.tsx
import Image from 'next/image';
import styles from './Profile.module.css'; // Ganti ke CSS baru
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Image 
        src="/images/PasPhoto-Solafide.png" // Pastikan path ini benar
        alt="Solafide Zamili"
        width={150} 
        height={150}
        className={styles.profileImage}
      />
      <h3>SOLAFIDE ZAMILI.</h3>
      <p>I'm a software developer...</p>

      <div className={styles.socialLinks}>
        <a href="https://github.com/201solafide/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/solafide-zamili" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com/solafide-zamili.1" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>

      <button className={styles.downloadButton}>DOWNLOAD CV</button>
    </div>
  );
}