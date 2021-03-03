import React, { useState } from "react";
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
import mockData from "./mockData";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    const [pokemonData, setPokemonData] = useState(mockData);
    const classes = usestyles();

    const firstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const getCardComponent = (pokemonid) => {
        const { id, name } = pokemonData[`${pokemonid}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

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
