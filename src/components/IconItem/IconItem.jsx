/*import { ReactSVG } from 'react-svg';*/
import styles from './IconItem.module.css';

const IconItem = ({ name, link }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer' className={styles.iconItemLink}>
            <svg>
                <image href={`/img/${name}.svg`} />
            </svg>
        </a>
    );
};

export default IconItem;