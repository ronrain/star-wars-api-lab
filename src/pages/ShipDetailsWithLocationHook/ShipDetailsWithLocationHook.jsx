import { useLocation, Link } from 'react-router-dom'
import { useState } from 'react';

const ShipDetailsWithLocationHook = () => {
  const location = useLocation()
  const [shipDetails, setShipdetails] = useState(location.state.ship)


  return ( 
    <div className={StyleSheet.shipDetails}>
      <h1>Name: {shipDetails.name}</h1>
      <h2>Model: {shipDetails.model}</h2>
      <h2>Made by: {shipDetails.manufacturer}</h2>
      <h2>Hyperdrive rating: {shipDetails.hyperdrive_rating}</h2>
      <Link to='/ships'><button>Back</button> </Link>
    </div> 
  );
}

export default ShipDetailsWithLocationHook;