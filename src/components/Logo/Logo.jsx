import styles from './Logo.module.css';

const Logo = ({ url}) => {
    return (
        <div className={styles.logoContainer}>
            <img className={styles.logoImg} src={url} alt='' />
            <p className={styles.logoText}>Svitlana Lazarieva</p>
        </div>
    )
}

export default Logo;