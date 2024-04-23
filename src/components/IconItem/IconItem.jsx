import { ReactSVG } from 'react-svg';
import styles from './IconItem.module.css';

const IconItem = ({ name, link, className }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener" className={styles.iconItemLink}>
            <ReactSVG className={className}  src={require(`../../img/${name}.svg`)} />
        </a>
    );
};

export default IconItem;