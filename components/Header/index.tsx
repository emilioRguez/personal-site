import styles from './styles.module.scss'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="emilio.rh" />
        <nav>
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">Projects</a>
          <a href="">About me</a>
        </nav>
        <div className={styles.socialMedia}>
          <a href=""><FaTwitter size={'1.5rem'} /></a>
          <a href=""><FaGithub size={'1.5rem'} /></a>
          <a href=""><FaLinkedin size={'1.5rem'} /></a>
        </div>
      </div>
    </header>
  )
}