import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import mockData from "./mockData";
import { makeStyles } from "@material-ui/styles";

const usestyles = makeStyles({
    imgStyle: {
        width: "200px",
    },
});
const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonid } = params;
    const classes = usestyles();

    const [pokemon, setPokemon] = useState(mockData[`${pokemonid}`]);

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
    return generatePokemonJSX();
};

export default Pokemon;
