import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    header: {
        backgroundColor: "#1976D2",
        padding: "20px",
        display: "flex",
        " &>* ":
        {
            color: "white"
        },
        "&>*:not(:last-child)":{marginRight: "10px"},

    },
    link: {
        textDecoration: "none",
        "&:hover":{
            opacity: ".9"
        }
    }
})