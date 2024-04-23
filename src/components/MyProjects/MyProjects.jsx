import ProjectItem from '../ProjectItem/ProjectItem';
import imageFinder from '../../img/projects/image-finder.jpg';
import landingPage from '../../img/projects/landing-page.png';
import englishSchool from '../../img/projects/english-school.png';
import filmCollection from '../../img/projects/film-collection.png';
import filmoteka from '../../img/projects/filmoteka.png';
import kapusta from '../../img/projects/kapusta.png';
import styles from './MyProject.module.css';

const MyProjects = () => {
    return (
        <div className='container'>
            <h2 className={styles.myProjectsTitle}>My Projects</h2>
            <ul className={styles.myProjectsList}>
                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://sweetlanas.github.io/goit-markup-hw-08/index.html' name={landingPage} title='HTML CSS/SASS' description='Web Studio Landing Page (mobile-first)' />
                </li>

                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://sweetlanas.github.io/image-finder/' name={imageFinder} title='React app' description='Helper when searching for pictures' />
                </li>
                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://swet-goit-react-hw-05-movies.netlify.app/movies' name={filmCollection} title='React app' description='App for finding movies and movie information' />
                </li>
                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://sweetlanas.github.io/parcel-project-blended-heroes/' name={englishSchool} title='HTML CSS/SASS Teamwork' description='Digital Business Card for English school' />
                </li>
                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://elenmandrovskaya.github.io/dream-film/' name={filmoteka} title='JavaScript, Rest-API Teamwork' description='App to build your movie library' />
                </li>
                <li className={styles.myProjectsItem}>
                    <ProjectItem url='https://kapusta-finance-tracker.netlify.app/' name={kapusta} title='React, Node.js Teamwork' description='App for maintaining and controlling the family budget' />
                </li>
            </ul>
        </div>
    )
}

export default MyProjects;