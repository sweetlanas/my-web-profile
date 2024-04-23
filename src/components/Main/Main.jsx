import Button from 'components/Button/Button';
import IconsList from 'components/IconsList/IconsList';
import myfoto from '../../img/myfoto.png';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className='container'>
            <div className={styles.mainFlexContainer}>
                <div className={styles.mainTextContainer}>
                    <div className={styles.mainTextHiContainer}>
                        <p className={styles.mainHi}>Hallo, Ich bin</p>
                        <p className={styles.mainName}>Svitlana Lazarieva</p>
                        <h1 className={styles.mainTitle}>Full Stack <br /><span className={styles.mainTitleAccent}>Entwicklerin</span></h1>
                        <p className={styles.mainText}>Et voluptate id veniam enim culpa deserunt occaecat est aute sit officia enim Lorem. Sit aliqua consequat ut anim voluptate non velit esse ex. Ut eu qui irure eu occaecat ullamco aute ad adipisicing minim exercitation laboris esse tempor.</p>
                    </div>                   
                        <Button text='Hire Me' className={styles.mainButtonHire} />
                        <Button text='Download CV' />                                   
                </div>
                <div className={styles.mainFotoContainer}><img src={myfoto} alt='' /></div>
            </div>
            <IconsList  className={styles.iconsFill}/>


        </div>
    )
}

export default Main;