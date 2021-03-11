import React, { useState, useEffect } from "react";
import logo from "./images/pokeball.png";
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import usestyles from "./style.jsx";



const Pokedex = (props) => {
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");

    console.log(pokemonData)
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((responses) => {
                console.log(responses);
                const { data } = responses;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://pokeres.bastionbot.org/images/pokemon/${
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
        const { name, sprite } = pokemonData[pokemonid];

        return (
            <>
                <Grid item xs={6} md={4}>
                    <Card
                        className={classes.card}
                        onClick={() => history.push(`/${pokemonid}`)}
                    >
                        <CardMedia
                            className={classes.CardMedia}
                            image={sprite}
                        ></CardMedia>
                        <CardContent className={classes.textCenter}>
                            <Typography
                                style={{
                                    fontFamily: "Bree Serif",
                                    fontSize: "15px",
                                }}
                            >{`${firstCharUpperCase(name)}`}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </>
        );
    };

    return (
        <>
            <Grid container className={classes.navbar}>
                <Grid item md={3} xs={3}></Grid>
                <Grid
                    item
                    md={3}
                    xs={6}
                    style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                    }}
                >
                    <img className={classes.logo} src={logo} />
                    <Typography
                        variant="h5"
                        style={{ fontFamily: "Bree Serif" }}
                    >
                        Pokedex
                    </Typography>
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <input
                        className={classes.textfield}
                        placeholder="Search pokemon..."
                        onChange={handleOnClick}
                    />
                </Grid>
                <Grid item md={3} xs={3}></Grid>
            </Grid>

            {pokemonData ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        className={classes.root}
                    >
                        {Object.keys(pokemonData).map((pokemonid) => {
                            return (
                                pokemonData[pokemonid].name.includes(filter) &&
                                getCardComponent(pokemonid)
                            );
                        })}
                    </Grid>
                </div>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;
