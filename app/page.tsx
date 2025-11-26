import { FaDev, FaIcons, FaICursor } from 'react-icons/fa6';
import styles from './page.module.css';
import { 
  FaCode, 
  FaCamera, 
  FaChartLine, 
  FaMobileAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaItchIo,
  FaCloudflare
} from 'react-icons/fa';

export default function Home() {
  return (
    <article>
      {/* ========== BAGIAN ABOUT ========== */}
      <section id="about" className={styles.section}>
        <h2 className={styles.title}>ABOUT —</h2>
        <p className={styles.aboutText}>
          A fresh graduate in Informatics Engineering, 
          passionate about Web development, IoT system and Deep Learning Enthusiast
        </p>

        {/* Wrapper untuk info detail (kita buat 2 kolom) */}
        <div className={styles.aboutDetails}>
          <ul>
            <li><strong>Birthday:</strong> 30. May. 2005</li>
            <li><strong>City:</strong> Jakarta</li>
            <li><strong>Study:</strong> Sumatera Institute of Technology</li>
            <li><strong>E-mail:</strong> solafidezamili1945@gmail.com</li>
            <li><strong>Phone:</strong> +6282260025752</li>
          </ul>
          <ul>
            <li><strong>Degree:</strong> Honors</li>
            <li><strong>Country:</strong> Indonesia</li>
            <li><strong>Interest:</strong> Web & IoT Development, with Deep Learning Enthusiast</li>
            <li><strong>Lang:</strong> English</li>
            <li><strong>Website:</strong> portfolio-zamili-app.vercel.app</li>
          </ul>
        </div>
      </section>

      {/* Nanti kita tambahkan bagian "SERVICE" di sini */}

      <section id="service" className={styles.section}>
        <h2 className={styles.style}>SERVICE</h2>
        
        {/* Kita gunakan Grid untuk 4 kotak */ }
        <div className={styles.serviceGrid}>

          <div className={styles.serviceCard}>
            {/* Ganti [ICON] dengan komponen ikon nanti */}
            <h3><FaDev /> WEB DEVELOPER</h3> 
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaCloudflare /> IOT SYSTEM & CLOUD FIREBASE</h3>
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaChartLine /> SYSTEM ENGINEERING</h3>
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaCode /> MACHINE LEARNING CNN</h3>
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

        </div>
      </section>

      {/* ========== BAGIAN RESUME (BARU) ========== */}
      <section id="resume" className={styles.section}>
        <h2 className={styles.title}>RESUME —</h2>
        
        <div className={styles.resumeGrid}>
          {/* === Kolom Edukasi === */}
          <div>
            <h3 className={styles.resumeTitle}>Education</h3>
            <div className={styles.resumeItem}>
              <h4>Bachelor Degree</h4>
              <span>2021 - 2025 | Sumatera Institute of Technology</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
            <div className={styles.resumeItem}>
              <h4>High School</h4>
              <span>2018 - 2021 | SMA Negeri 1 Telukdalam</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
          </div>
          
          {/* === Kolom Pengalaman === */}
          <div>
            <h3 className={styles.resumeTitle}>Experience</h3>
            <div className={styles.resumeItem}>
              <h4>System Engineering</h4>
              <span>2025 - Sekarang | PT Abdi Jaya Integra</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
            <div className={styles.resumeItem}>
              <h4>IT Support</h4>
              <span>July 2024 - August 2024 | PT PLN (Persero) UPP SUMBAGUT 3</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BAGIAN PROJECT (BARU) ========== */}
      <section id="project" className={styles.section}>
        <h2 className={styles.title}>PROJECT —</h2>
        
          <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <img src="/images/EmbungTera.jpg" alt="Project 1" />
            <div className={styles.projectOverlay}>
              <h3>Sistem Informasi Embung ITERA</h3>
              <span>Web Development</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/images/MonitoringCuaca.jpg" alt="Project 2" />
            <div className={styles.projectOverlay}>
              <h3>Purwarupa Monitoring Cuaca</h3>
              <span>Iot Development</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/placeholder3.jpg" alt="Project 3" />
            <div className={styles.projectOverlay}>
              <h3>Project Title 3</h3>
              <span>UI/UX Design</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/placeholder4.jpg" alt="Project 4" />
            <div className={styles.projectOverlay}>
              <h3>Project Title 4</h3>
              <span>Mobile App</span>
            </div>
          </div>
        </div>
      </section>
      {/* ========== BAGIAN BLOG (BARU) ========== */}
      <section id="blog" className={styles.section}>
        <h2 className={styles.title}>BLOG —</h2>

        <div className={styles.blogGrid}>
          <div className={styles.blogCard}>
            {/* <img src="/blog-image1.jpg" alt="Blog Post 1" /> */}
            <div className={styles.blogContent}>
              <span>10 Oct, 2025 | Web Design</span>
              <h3>How to Build a Sticky Sidebar</h3>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className={styles.blogCard}>
            {/* <img src="/blog-image2.jpg" alt="Blog Post 2" /> */}
            <div className={styles.blogContent}>
              <span>26 Nov, 2025 | Icons Style</span>
              <h3>Most icons style with nodeJS</h3>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
              <p>VISIT THE ICON <a href="https://fontawesome.com/icons/dev?s="><FaIcons/></a></p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BAGIAN CONTACT (BARU) ========== */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.title}>CONTACT —</h2>

        <div className={styles.contactGrid}>
          {/* === Info Kontak === */}
          <div className={styles.contactInfo}>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.</p>
            
            <div className={styles.infoItem}>
              <strong><FaEnvelope /> E-mail:</strong>
              <span>solafidezamili1945@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <strong><FaPhone /> Phone:</strong>
              <span>+822 6002 5752</span>
            </div>
            <div className={styles.infoItem}>
              <strong><FaMapMarkerAlt /> Address:</strong>
              <span>Tangerang, INA</span>
            </div>
          </div>

          {/* === Form Kontak === */}
          <form className={styles.contactForm}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows={6} placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </article>
  );
}
