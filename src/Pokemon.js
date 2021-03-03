import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios"

const usestyles = makeStyles({
    imgStyle: {
        width: "200px",
    },
});
const Pokemon = (props) => {
    const { match ,history} = props;
    const { params } = match;
    const { pokemonid } = params;
    const classes = usestyles();
    const [pokemon, setPokemon] = useState();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
        .then((response)=>{
            const {data}=response
            setPokemon(data)
        })
        .catch((e)=>{
            setPokemon(false)
        })
    },[pokemonid])



    const firstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const generatePokemonJSX = () => {
        const { id, name, types, height, weight, sprites } = pokemon;
        const fullImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <>
                <Typography variant="h3">
                    {`${id}. ${firstCharUpperCase(name)}`}

                    <img style={{ width: "70px" }} src={fullImgUrl} />
                </Typography>
                <img className={classes.imgStyle} src={fullImgUrl}></img>
                <Typography variant="h6">Pokemon Info</Typography>
                <Typography>Height:{height}</Typography>
                <Typography>Weight:{weight}</Typography>
                <Typography variant="h6">Types</Typography>
                {types.map((typeinfo) => {
                    const { type } = typeinfo;
                    const { name } = type;
                    return <Typography>{`${name}`}</Typography>;
                })}
            </>
        );
    };
    return (<>
        {pokemon==undefined && <CircularProgress/>}
        {pokemon!==undefined &&pokemon&& generatePokemonJSX()}
        {pokemon===false && <Typography>Page Not Found</Typography>}
        <Button variant="contained" onClick={()=>{history.push("/")}}>Back to Pokedex</Button>

    </>);
};

export default Pokemon;
