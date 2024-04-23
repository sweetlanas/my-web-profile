import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className='container'>
            <h2 className={styles.aboutMeTitle}>About Me</h2>
            <p className={styles.aboutMeText}>Elit ipsum qui aliquip enim est laboris deserunt incididunt. Ea quis adipisicing ex incididunt enim quis cillum et proident cillum incididunt. Laboris ad reprehenderit veniam aliquip nisi dolore laboris amet dolor aliqua exercitation laborum aliqua ex. Deserunt laborum do dolor sint amet id enim. Non anim velit do qui laboris minim nostrud eu laborum cillum quis nisi. <a href='' target='_blank' rel="noreferrer noopener" className={styles.aboutMeLink}>Odesa</a></p>
        </div>
    )
}

export default AboutMe;