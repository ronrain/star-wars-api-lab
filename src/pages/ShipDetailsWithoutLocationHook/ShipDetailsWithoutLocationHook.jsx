import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as apiService from '../../services/apiService'

const ShipDetailsWithoutLocationHook = () => {
  const {shipId} = useParams()
  const [shipDetails, setShipDetails] = useState([])

  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipData = await apiService.getShipData(shipId)
      setShipDetails(shipData)
    }
    fetchShipDetails()
  })

  if (!shipDetails) return <h2>please wait... loading ships...</h2>

  return (  
  <>
  <div>
    <h1>Name: {shipDetails.name}</h1>
    <h2>Model: {shipDetails.model}</h2>
    <h2>Made by: {shipDetails.manufacturer}</h2>
    <h2>Hyperdrive rating: {shipDetails.hyperdrive_rating}</h2>
    <Link to='/ships'><button>Back</button> </Link>
  </div> 
  </>

  );
}

export default ShipDetailsWithoutLocationHook;