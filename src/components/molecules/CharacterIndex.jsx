import { useEffect, useState } from "react"
import NavegationChapters from "../atoms/NavegationChapters"

const CharacterIndex = ({data}) => {
    const [color, setColor] = useState()

    useEffect(()=>{
    if (data.status == "Alive"){
    setColor("text-success")
    }else if (data.status == "Dead"){
    setColor("text-danger")
    }else {
    setColor("text-warning")
    }   
    },[])
  return (
    
   <div className="container mt-4 " > 
       <>
        <NavegationChapters idnumber={data.id}/>
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-around">
          <div className="p-2">  
           <div className="d-flex flex-column align-items-center ">
            <h1 className="text-center">{data.name}</h1>
            <img className="img-fluid rounded" src={data.image}  alt={data.name} />
           </div>
          </div>
          <div className="p-2">
            <div className={color}>
                <div className="d-flex flex-column justify-content-between fs-4 fw-bolder">
                    <p className="p-2 bd-highlight">status: {data.status}</p>
                    <p className="p-2 bd-highlight">species: {data.species}</p>
                    {data.type && <p className="p-2 bd-highlight">type: {data.type}</p>}
                    <p className="p-2 bd-highlight">gender: {data.gender}</p>
                    <p className="p-2 bd-highlight">origin: {data.origin.name}</p>
                </div>
            </div>    
          </div>  
        </div>
       </>
   </div> 
  )
}

export default CharacterIndex