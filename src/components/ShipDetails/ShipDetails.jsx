import { Link } from 'react-router-dom'

const ShipDetails = ({shipDetails}) => {
  return (
    <div>
      <h2>Name: {shipDetails.name.toLowerCase()}</h2>
      <h2>model: {shipDetails.model.toLowerCase()}</h2>
      <Link to='/ships'><button>BACK</button></Link>
    </div>
  )
}

export default ShipDetails