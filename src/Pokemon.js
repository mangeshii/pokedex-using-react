import React from 'react'

const Pokemon=props=>{
    const {match}=props
    const{params}=match
    const{pokemonid}=params
    return(
        <div>`this is a Pokemon page with pokemon id = #${pokemonid}`</div>
    )
}

export default Pokemon