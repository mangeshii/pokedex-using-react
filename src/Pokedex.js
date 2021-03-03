import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const usestyles = makeStyles((theme) => ({
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
    searchContainer: {
        display: "flex",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        padding: "5px",
    },
    searchIcon: {
        alignSelf: "flex-end",
    },
}));

const Pokedex = (props) => {
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((responses) => {
                const { data } = responses;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            index + 1
                        }.png`,
                    };
                });
                setPokemonData(newPokemonData);
            });
    }, []);

    const classes = usestyles();

    const firstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const handleOnClick = (event) => {
        setFilter(event.target.value);
    };
    const getCardComponent = (pokemonid) => {
        const { id, name, sprite } = pokemonData[pokemonid];

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
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon} />
                        <TextField label="Pokemon" onChange={handleOnClick} />
                    </div>
                </Toolbar>
            </AppBar>

            {pokemonData ? (
                <Grid container spacing={2} className={classes.root}>
                    {Object.keys(pokemonData).map((pokemonid) => {
                        return (
                            pokemonData[pokemonid].name.includes(filter) &&
                            getCardComponent(pokemonid)
                        );
                    })}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;
