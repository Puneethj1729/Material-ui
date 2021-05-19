import {makeStyles} from '@material-ui/core/styles';
const useStyles =makeStyles((theme)=>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    buttons:{
        marginTop:'40px'
    },
    icon:{
        marginRight:'20px'
    },
    cardGrid:{
        padding:'40px 15px',
        

    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        borderRadius:'15px'
    },
    footer:{
      padding:'50px 0',
        
        backgroundColor:theme.palette.background.paper
    }
}));
export default useStyles;