import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./index.css";
import usestyles from "./style.jsx"


const Pokemon = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { pokemonid } = params;
    const classes = usestyles();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}/`)
            .then((response) => {
                const { data } = response;
                setPokemon(data);
            })
            .catch((e) => {
                setPokemon(false);
            });
    }, [pokemonid]);

    const firstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const generatePokemonJSX = () => {
        const { id, name, types, height, weight, sprites } = pokemon;
        const fullImgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        return (
            <>
                <div className="container">
                    <div className="subcontainer">
                        <Typography style={{ marginTop: "10px",fontFamily: 'Bree Serif' }}  variant="h3">
                            {`${firstCharUpperCase(name)}`}
                        </Typography>
                        <img
                            className={classes.imgStyle}
                            src={fullImgUrl}
                        ></img>
                        <Typography className={classes.heading} variant="h6">Pokemon Info</Typography>
                        <Typography className={classes.theme}>{`Height:${height*10}cm`}</Typography>
                        <Typography className={classes.theme}>{`Weight:${weight/10}kg`}</Typography>
                        <Typography className={classes.heading} variant="h6">Types</Typography>
                        {types.map((typeinfo) => {
                            const { type } = typeinfo;
                            const { name } = type;

                            return <Typography className={classes.theme}>{`${name}`}</Typography>;
                        })}
                        <Button
                            onClick={() => {
                                history.push("/");
                            }}
                            className={classes.button}
                        >
                            Back to Pokedex
                        </Button>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            {pokemon == undefined && <CircularProgress style={{display:'flex',justifyContent:'center',textAlign:'center'}} />}
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
            {pokemon === false && <Typography>Page Not Found</Typography>}
        </>
    );
};

export default Pokemon;
