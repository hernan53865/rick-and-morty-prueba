import { Link } from "react-router-dom"
import ErrorPage from "../../assets/img/ErrorPage.jpg"

const Error404 = () => {
  return (
  <Link to={`/`} > 
    <div className="marty d-flex flex-row align-items-center">
    <img className="morty" src={ErrorPage}  alt="sad" />
    </div>
  </ Link>  
  )
}

export default Error404