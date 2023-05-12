import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterIndex from "../molecules/CharacterIndex"
import Error404 from "./Error404"

const Characters = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/"+ params.id)
        .then(res => {
            if (res.ok === false) {
               return setError(true) 
            }
            return res.json()})
        .then(res => setData(res))
    },[])  
   
    if (error) return <Error404/>

  return (
    <>
    {
        (data.id) 
    && 
        <div className="container bg-secondary bg-gradient pt-3">
            <h2 className="text-center">Characters</h2>
            <CharacterIndex data={data}/>
        </div>
    }
    </>
  )
}

export default Characters