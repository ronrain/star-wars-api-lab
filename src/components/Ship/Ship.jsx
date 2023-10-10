import { Link } from 'react-router-dom'
import styles from './Ship.css'

const Ship = ({ship}) => {
  return (  
    <>
      <div className={styles.shipCard}>
        <h1>{ship.name}</h1>
        <div className={styles.linkContainer}>
          <Link to='/ships/details' state={{ship}}><button>useLocation</button></Link>
          <Link to={`/ships/${ship.url.match(/\d+/)}`}><button>useParams</button></Link>
        </div>
      </div>
    </>
    
  );
}

export default Ship;
