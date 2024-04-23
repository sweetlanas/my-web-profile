import styles from './ProjectItem.module.css';

const ProjectItem = ({ name, title, description, url }) => {
    return (
        <div>
            <a href={url} target='_blank' >
                <img src={name} alt={name} width={320} height={250} className={styles.projectItemImg} />
                <h3 className={styles.projectItemTitle}>{title}</h3>
                <p className={styles.projectItemDesc}>{description}</p>
            </a>
        </div>
    )
}

export default ProjectItem;