import IconItem from '../IconItem/IconItem';
import styles from './ContactMe.module.css';

const ContactMe = () => {
    return (
        <div className='container'>
            <h2 className={styles.contactMeTitle}>Contact Me</h2>
            <ul className={styles.contactMeList}>
                <li className={styles.contactMeItem}>
                    <IconItem link='mailto:info@devstudio.com' className={styles.contactMeLink} name='email' />
                    <span className={styles.contactMeLinkText}>info@devstudio.com</span>
                </li>
                <li className={styles.contactMeItem}>
                    <IconItem link='tel:+380961111111' className={styles.contactMeLink} name='phone' />
                    <span className={styles.contactMeLinkText}>+38 096 111 11 11</span>
                </li>
            </ul>
        </div>
    )
}

export default ContactMe;