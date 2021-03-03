import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const usestyles = makeStyles({
    root: {
        padding: "20px 50px",
        width:'100%'
    },
});

const getCardComponent = () => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>hi</CardContent>
            </Card>
        </Grid>
    );
};

const Pokedex = () => {
    const classes = usestyles();
    return (
        <>

                <AppBar position="static">
                    <Toolbar />
                </AppBar>

                <Grid container spacing={2} className={classes.root}>
                    {getCardComponent()}
                    {getCardComponent()}
                    {getCardComponent()}
                    {getCardComponent()}
                </Grid>

        </>
    );
};

export default Pokedex;
