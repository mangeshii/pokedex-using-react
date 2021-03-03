import React, { useState ,useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios'

const usestyles = makeStyles({
    root: {
        padding: "20px 50px",
        width: "100%",
    },
    CardMedia: {
        margin: "auto",
    },
    textCenter: {
        textAlign: "center",
    },
});

const Pokedex = (props) => {
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((responses)=>{
            const {data}=responses;
            const {results}=data;
            const newPokemonData={}
            results.forEach((pokemon,index) => {
                newPokemonData[index+1]={
                    id:index+1,
                    name:pokemon.name,
                    sprite:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
                }


            });
            setPokemonData(newPokemonData)


        })
    },[]);

    const classes = usestyles();

    const firstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const getCardComponent = (pokemonid) => {
        const { id, name,sprite } = pokemonData[pokemonid];

        return (
            <Grid item xs={12} sm={4} key={pokemonid}>
                <Card onClick={() => history.push(`/${pokemonid}`)}>
                    <CardMedia
                        className={classes.CardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    ></CardMedia>
                    <CardContent className={classes.textCenter}>
                        <Typography>{`${id} ${firstCharUpperCase(
                            name
                        )}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>

            {pokemonData ? (
                <Grid container spacing={2} className={classes.root}>
                    {Object.keys(pokemonData).map((pokemonid) => {
                        return getCardComponent(pokemonid);
                    })}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;
