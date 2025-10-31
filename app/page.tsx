import styles from './page.module.css';
import { 
  FaCode, 
  FaCamera, 
  FaChartLine, 
  FaMobileAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Home() {
  return (
    // Kita gunakan <article> atau <div> sebagai pembungkus utama
    <article>
      {/* ========== BAGIAN ABOUT ========== */}
      <section id="about" className={styles.section}>
        <h2 className={styles.title}>ABOUT —</h2>
        <p className={styles.aboutText}>
          I'm a web developer in New York. I spend my days with my hands in
          different areas of development. incididunt ut labore et dolore
          magna aliqua. Ut enim ad nim veniam, quis ostrud exercitation.
        </p>

        {/* Wrapper untuk info detail (kita buat 2 kolom) */}
        <div className={styles.aboutDetails}>
          <ul>
            <li><strong>Birthday:</strong> 01. March. 1990</li>
            <li><strong>City:</strong> New York</li>
            <li><strong>Study:</strong> NY University</li>
            <li><strong>E-mail:</strong> mymail@gmail.com</li>
            <li><strong>Phone:</strong> +984 544 6984</li>
          </ul>
          <ul>
            <li><strong>Degree:</strong> Honors</li>
            <li><strong>Country:</strong> American</li>
            <li><strong>Interest:</strong> PS, Design</li>
            <li><strong>Lang:</strong> English, Hindi, Etc</li>
            <li><strong>Website:</strong> www.meweb.com</li>
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
            <h3><FaCode /> DEVELOPER</h3> 
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaCamera /> PHOTOGRAPHY</h3>
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaChartLine /> MARKETING</h3>
            <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3><FaMobileAlt /> RESPONSIVE</h3>
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
              <h4>Master Degree</h4>
              <span>2015 - 2018 | NY University</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
            <div className={styles.resumeItem}>
              <h4>Bachelor Degree</h4>
              <span>2012 - 2015 | LA University</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
          </div>
          
          {/* === Kolom Pengalaman === */}
          <div>
            <h3 className={styles.resumeTitle}>Experience</h3>
            <div className={styles.resumeItem}>
              <h4>Web Developer</h4>
              <span>2020 - Sekarang | Google Inc.</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
            <div className={styles.resumeItem}>
              <h4>UI/UX Designer</h4>
              <span>2018 - 2020 | Facebook</span>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BAGIAN PROJECT (BARU) ========== */}
      <section id="project" className={styles.section}>
        <h2 className={styles.title}>PROJECT —</h2>
        
        <div className={styles.projectGrid}>
          {/* Ganti 'src' dengan path ke gambar Anda di folder /public */}
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
              <span>12 Oct, 2025 | Photography</span>
              <h3>Top 10 Lenses for Beginners</h3>
              <p>Lorem ipsum dolor sit amet, tur adipisicing elit tempor.</p>
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
              <span>mymail@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <strong><FaPhone /> Phone:</strong>
              <span>+984 544 6984</span>
            </div>
            <div className={styles.infoItem}>
              <strong><FaMapMarkerAlt /> Address:</strong>
              <span>New York, USA</span>
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
