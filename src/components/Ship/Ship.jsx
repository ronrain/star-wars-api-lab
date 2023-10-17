import { Link } from 'react-router-dom'
import styles from './Ship.module.css'

const Ship = ({ship}) => {
  return (  
      <div className={styles.shipCard}>
        <h1>{ship.name.toLowerCase()}</h1>
        <div className={styles.linkContainer}>
          <Link to={`/ships/${ship.url.match(/\d+/)}`}><button>useParams</button></Link>
        </div>
      </div>
  );
}

export default Ship;
