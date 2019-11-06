import React from 'react'
import { Paper, List, ListItemIcon, ListItem, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddBidder from './AddBidder';


const useStyles = makeStyles(theme => ({
    Paper : {
        height:"100vh",
        background:'#23374D 0% 0% no-repeat padding-box',
        borderRadius: 0
    }
}))


const Main = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.Paper}>
                <List>
                    <ListItem button>
                        <AddBidder/>
                    </ListItem>
                    <Divider style={{background:'#E5E5E5'}}/>
               </List>
            </Paper>
        </div>
    )
}

export default Main
