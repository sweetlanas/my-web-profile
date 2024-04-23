import styles from './Button.module.css'

const Button = ({ text, className }) => {
    return (
        <button
            /* onClick={onButtonClick}*/
            type="button"
            className={`${styles.customButton} ${className}`}>
            {text}
        </button>
    );
};

export default Button;