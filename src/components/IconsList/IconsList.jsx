import IconItem from '../IconItem/IconItem';
import styles from './IconsList.module.css';

const IconsList = ({ className }) => {
    return (
        <ul className={`${styles.iconsList} ${className}`}>
            <li><IconItem className={className} link='https://www.instagram.com/lazareva_sweetlana/?next=%2F' name='instagram' /></li>
            <li><IconItem className={className} link='https://www.linkedin.com/in/svitlana-lazarieva/' name='linkedin' /></li>
            <li><IconItem className={className} link='https://github.com/sweetlanas' name='github' /></li>
            <li><IconItem className={className} link='https://www.facebook.com/profile.php?id=100007866543703' name='facebook' /></li>
            <li><IconItem className={className} link='https://wa.me/+390934914990' name='whatsapp' /></li>
        </ul>
    )
}

export default IconsList;