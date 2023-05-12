import CharacterList from "../molecules/CharacterList"
import Login from "./Login"

function App() {
  
  return (
    <div className="bg-black text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <Login/>

       <CharacterList />
      
    </div>
  )
}

export default App
