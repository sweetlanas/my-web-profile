import ServicesList from '../ServicesList/ServicesList';
import styles from './MyServices.module.css';

const MyServices = () => {
    return (
        <div className='container'>
            <h2 className={styles.myServicesTitle}>Services</h2>
            <p className={styles.myServicesText}>Incididunt duis nisi non occaecat amet eiusmod minim non commodo eu nostrud. Non culpa ad sint sit aliqua nisi sunt aliquip.</p>
            <ServicesList />
        </div>
    )
}

export default MyServices;