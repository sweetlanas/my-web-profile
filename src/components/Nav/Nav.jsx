import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div >
            <nav >
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="" className={styles.navLink}>Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="" className={styles.navLink}>About Me</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#footer" className={styles.navLink}>Services</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#footer" className={styles.navLink}>Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;