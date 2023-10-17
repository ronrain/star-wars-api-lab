import * as apiService from '../../services/apiService'
import { useEffect, useState } from 'react'
import Ship from '../../components/Ship/Ship'

import styles from './ShipList.module.css'

const ShipList = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await apiService.getStarShips()
      setShips(shipData)
    }
    fetchShipData()
  }, [])

  if (!ships.length) return <h2>please wait... loading ships...</h2>

  return (  
    <>
    <div className={styles.shipContainer}> 
      {ships.map(ship =>
        <Ship key={ship.name} ship={ship} />
      )}
    </div>
    </>
    
    
  );
}


export default ShipList;