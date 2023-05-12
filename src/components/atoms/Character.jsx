import { Link } from "react-router-dom"

const Character = ({characters}) => {
  return (
        <div className="text-center p-5">
          <Link to={`/characters/${characters.id}`}>
            <div className="btn btn-outline-light">
              <h3 className="">{characters.name}</h3>
              <img className="img-fluid rounded-pill" src={characters.image}  alt={characters.name} />
            </div>
          </Link>  
          <p>{characters.origin.name}</p>
        </div>
  )
}

export default Character