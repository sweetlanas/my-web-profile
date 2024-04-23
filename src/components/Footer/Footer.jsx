import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Button from 'components/Button/Button';
import IconsList from 'components/IconsList/IconsList';
import styles from './Footer.module.css';
import logoImgFooter from '../../img/logo-footer.png';


const Footer = () => {
    return (
        <div>
        <div className={styles.footerContainer}>
            <div className='container'>
                <div className={styles.footerNavContainer}>
                <Logo url={logoImgFooter} />
                <Nav />
                <Button text='Back to top' />
                </div>
                <IconsList className={styles.iconFillFooter}/>
            </div>
            </div>
            <div className={styles.footerCopyright}>
                <div className='container'>
                <p className={styles.copyrightText}>
                    <span>&#169;</span>
                        2024 &#124; <span className={styles.copyrightTextName}>Svitlana Lazarieva</span>&#124; All Rights Reserved </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;