import Link from 'next/link'
import styles from './index.module.scss';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Link href="/movie">
        <a>Sezione movies</a>
      </Link>
    </div>
  )
}

export default Hero;


    