// di app/components/Navigation.tsx
import styles from './Navigation.module.css';
import { 
  FaUser, 
  FaFileAlt, 
  FaBriefcase, 
  FaRss, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#about">
            <FaUser />
            <span>ABOUT</span>
          </a>
        </li>
        <li>
          <a href="#resume">
            <FaFileAlt />
            <span>RESUME</span>
          </a>
        </li>
        <li>
          <a href="#project">
            <FaBriefcase />
            <span>PROJECT</span>
          </a>
        </li>
        <li>
          <a href="#blog">
            <FaRss />
            <span>BLOG</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope />
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}