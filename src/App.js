import Pokedex from "./Pokedex"
import Pokemon from "./Pokemon"
import {Route,Switch} from "react-router-dom"

const App=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Pokedex}/>
      <Route exact path="/:pokemonid" component={Pokemon}/>

    </Switch>
  )
}

export default App