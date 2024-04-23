import IconItem from '../IconItem/IconItem';
import styles from './IconsList.module.css';

const IconsList = ({className}) => {
    return (
        <div className={className}>
            <ul className={styles.iconsList}>
                <li><IconItem name='instagram' /></li>
                <li><IconItem name='linkedin' /></li>
                <li><IconItem name='github' /></li>
                <li><IconItem name='facebook' /></li>
                <li><IconItem name='whatsapp' /></li>
            </ul>
        </div>
    )
}

export default IconsList;