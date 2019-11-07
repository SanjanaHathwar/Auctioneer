import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Person from '../../assets/icons/person.svg'
import { TextField,Dialog,DialogActions,DialogContent,DialogTitle,Button, Divider } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background: "#E5E5E5 0% 0% no-repeat padding-box",
      font: "Light 20px/26px Roboto"
  
    },
    paper: {
        background: "#fff",
        backgroundColor: "rgba(255,255,255,0.8)"
    },
    backdrop: {
        
        backgroundColor:  "rgba(35, 55, 77, 0.7)"
    }
  });
const AddBidder = props => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <img src={Person} alt="" onClick={handleClickOpen} />

            <Dialog 
                BackdropProps={{
                    classes: {
                        root: classes.backdrop
                    }
                }
                }
                PaperProps ={{
                    classes: {
                        root: classes.paper
                    }
                }}
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Add new bidder<br/>
                    <Divider/>
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

AddBidder.propTypes = {

}

export default AddBidder
