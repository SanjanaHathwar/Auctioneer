import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Create from '../../assets/icons/createauction1.png'
import { TextField,Dialog,DialogActions,DialogContent,DialogTitle,Button, Divider, StepLabel } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import { getItem } from '../../action/auctionAction';
import { connect } from 'react-redux'
import Step1 from './Step1';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background: "#E5E5E5 0% 0% no-repeat padding-box",
      font: "Light 20px/26px Roboto"
  
    },
    paper: {
        background: "#fff",
        backgroundColor: "rgba(255,255,255,0.75)"
    },
    backdrop: {
        
        backgroundColor:  "rgba(35, 55, 77, 0.7)"
    },
    iconContainer: { 
        transform: 'scale(1.5)',
    },       
});

function getSteps() {
    return ['step1', 'step2', 'step3']
}
  
function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Step1/>;
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}
  
const CreateAuction = ({getItem}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //call item action
    useEffect(()=>{
        getItem()
    },[getItem])

    
    return (
        <div>
            <img src={Create} alt="" style={{width:40,height:40}} onClick={handleClickOpen} />
            <Dialog 
                maxWidth ='sm'
                fullWidth= {true}
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
                    <span style={{color:"#FFFFFF",fontSize:30}}>Create new Auction</span>
                    <Divider style={{backgroundColor:"#fff"}} />
                </DialogTitle>
                <DialogContent>
                    <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundColor: "transparent" }}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel classes={{ // apply this style
                                    iconContainer: classes.iconContainer,
                                    root : classes.icon
                                }}></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                    {activeStep === steps.length ? (
                    <div>
                       
                    </div>
                    ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
                </DialogContent>
                
            </Dialog>
        </div>
    )
}

CreateAuction.propTypes = {
    getItem : PropTypes.func.isRequired,
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{getItem})(CreateAuction)
