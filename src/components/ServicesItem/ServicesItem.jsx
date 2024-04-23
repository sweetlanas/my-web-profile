import { ReactSVG } from 'react-svg';
import styles from './ServicesItem.module.css';

const ServicesItem = ({name,title,list}) => {
    return (
        <div className={styles.serviceItemContainer}>
            <div className={styles.serviceItemImg}>
                <ReactSVG src={require(`../../img/${name}.svg`)} />
            </div>
            <h3 className={styles.serviceItemTitle}>{title}</h3>
            <p className={styles.serviceItemText}>{list}</p>
        </div>
    )
}

export default ServicesItem;