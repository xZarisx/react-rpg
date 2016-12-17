import 'normalize.css';
import styles from './style.css';
import main from '../../maps/main.js'

export default ({children, loadMap}) => (

    <div className={styles.app}>
        <ul>
            <li onClick={() => loadMap(main)}>loadMap</li>
        </ul>
        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
