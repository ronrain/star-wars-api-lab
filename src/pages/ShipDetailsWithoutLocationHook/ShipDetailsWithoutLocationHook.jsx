import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as apiService from '../../services/apiService'
import ShipDetails from '../../components/ShipDetails/ShipDetails'

const ShipDetailsWithoutLocationHook = () => {
  const {shipId} = useParams()
  const [shipDetails, setShipDetails] = useState([])

  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipData = await apiService.getShipData(shipId)
      setShipDetails(shipData)
    }
    fetchShipDetails()
  }, [shipId])

  if (!shipDetails.name) return <h2>please wait... loading ships...</h2>

  return (  
    <ShipDetails 
      shipDetails={shipDetails} 
    />
  )
}

export default ShipDetailsWithoutLocationHook;