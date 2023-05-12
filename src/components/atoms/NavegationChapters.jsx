import { Link } from "react-router-dom"
import random from "../math/random"

const NavegationChapters = ({idnumber}) => {
    const derecha = "<<<<<"  
    const izquierda = ">>>>>"
  return (
    <div className="d-flex justify-content-between  align-items-center mb-5">
        <a href={`/characters/${random(idnumber)}`}>
            <div className="px-8 btn btn-outline-dark btn-lg"> {derecha} </div>
        </a> 
        <Link to={"/"}>
            <p className=" btn btn-outline-light btn-lg " >SEE ALL</p>
        </Link>   
        <Link reloadDocument to={`/characters/${random(idnumber)}`}>
            <div className="px-8 btn btn-outline-dark btn-lg"> {izquierda} </div>
          </Link> 
        
    </div>
  )
}

export default NavegationChapters