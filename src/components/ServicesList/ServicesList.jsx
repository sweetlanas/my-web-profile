import ServicesItem from "components/ServicesItem/ServicesItem";
import styles from './ServicesList.module.css';

const ServicesList = () => {
    return (
        <div>
            <ul className={styles.serviceList}>
                <li>
                    <ServicesItem name='development' title='DEVELOPMENT' list=' HTML5, CSS3, SASS, JavaScript/ES6, React, Redux, JSON, Git, Webpack, Node.js, REST-API, Objektorientierte Programmierung, SQL  ' />
                </li>
                <li>
                    <ServicesItem name='UI-UX' title='UI/UX' list='HTML5, CSS3, SASS, JavaScript/ES6, React, Redux, JSON, Figma' />
                </li>
                <li>
                    <ServicesItem name='design' title='WEB DESIGN' list='Canva, Adobe Dreamweaver, HTML5, CSS3, SASS, Figma' />
                </li>
                <li>
                    <ServicesItem name='graphics' title='GRAPHICS' list=' Adobe InDesign, Blender, HTML5, CSS3, SASS, Figma  ' />
                </li>
                <li>
                    <ServicesItem name='creativ' title='CREATIVE SOL' list='Lorem duis in nisi non id officia minim proident voluptate non ad.' />
                </li>
                <li>
                    <ServicesItem name='mobile' title='APP DESIGN' list=' Mobile first' />
                </li>
            </ul>
        </div>
    )
}

export default ServicesList;