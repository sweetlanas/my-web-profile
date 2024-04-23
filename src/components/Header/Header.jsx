import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Button from 'components/Button/Button';
import styles from './Header.module.css';
import logoImg from '../../img/logo.png';

const Header = () => {
    return (
        <div className='container'>
            <div className={styles.header} >
                <Logo url={logoImg} />
                <Nav />
                <Button text='Contact Me' />
            </div>
        </div>
    )
}

export default Header;