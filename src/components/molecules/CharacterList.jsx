import { useEffect, useState } from "react"
 import Character from "../atoms/Character"
 import Navegation from "../atoms/Navegation"

 
const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()

    useEffect(() =>  {  
     async function fechData() {
       const response = await fetch( "https://rickandmortyapi.com/api/character?page="+page)
       const data = await response.json()
       setLoading(false)
       setCharacters(data.results)
       setPrev(data.info.prev) 
       setNext(data.info.next)
     }
     fechData()
    }, [page])

  return (
    <div className="container pb-3"> 
    {loading ?
    (<div>Loading</div>)  :
      (<>
        <Navegation page={page} setPage={setPage} prev={prev} next={next}/>

        <div className="row">
          {characters.map(characters  =>  
            <div className="col-md-4"   key={characters.id}>
              <Character characters={characters}/> 
            </div>
          )}
        </div>
        <Navegation page={page} setPage={setPage} prev={prev} next={next}/>
       </>
       )
    }  
    </div>  
    )
}

export default CharacterList