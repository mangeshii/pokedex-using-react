import { makeStyles, fade } from "@material-ui/core/styles";

const usestyles = makeStyles((theme) => ({
    root: {
        width: "580px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]:{
            width:"320px"
        }
    },
    mains: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border:'2px solid pink'
    },
    card: {
        border: "2px solid black",
        borderRadius: "5%",
        width: "180px",
        height: "180px",

        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "#FFFAFA",
        },
        [theme.breakpoints.down('sm')]:{
            width:'140px',
            height:'140px'
        }

    },

    CardMedia: {
        margin: "auto",
        marginTop: "10px",
        width: "130px",
        height: "130px",

    },
    textCenter: {
        textAlign: "center",
        paddingTop: "0px",
    },

    logo: {
        width: "40px",
        height: "40px",
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
        height: "120px",
        alignItems: "center",
    },
    textfield: {
        border: "2px solid black",
        padding: "6px",
        width: "200px",
        fontFamily: "Bree Serif",
    },
    imgStyle: {
        width: "150px",
    },
    heading: {
        fontFamily: "Bree Serif",
    },
    theme: {
        fontFamily: "Bree Serif",
        color: "#696969",
    },
    button: {
        backgroundColor: "white",
        color: "black",
        border: "2px solid #e7e7e7",
        height: "25px",
        fontFamily: "Bree Serif",
        marginTop: "10px",
        padding: "10px",
    },
}));

export default usestyles;
