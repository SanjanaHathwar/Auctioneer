import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField  } from '@material-ui/core'
import { connect } from 'react-redux'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import moment from 'moment'



const Step1 = ({auction : {items}}) => {
    const [values,setValues ] = React.useState({
        item: '',
        minDecrement: '',
        startingPrice : '',
        date:'',
        time: '',
        pickup:'',
        drop: '',
        auctionId:''
    })
    const [item,setItem] = React.useState("")

    const selectStyles = {
        menu: base => ({
          ...base,
          zIndex: 100
        })
    }
    const handleTime = (date) => {
        moment.locale()
         
        sessionStorage.setItem("startTime", date);
        let y = moment(date).format('HH:mm')
        setValues({time:date})
    }

    return (
        <div>{console.log(item)}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={1} >
                <Grid item xs>
                    <Autocomplete
                        options={items}
                        getOptionLabel={items => items.itemName}
                       
                        onChange={(event, newValue) => {
                            newValue=== null ? 
                            setItem("") :setItem(newValue.itemId);
                        }}
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Enter product" variant="outlined" fullWidth margin="none"/>
                        )}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        onChange = {(e)=>setValues({auctionId:e.target.value}) }
                        type="text" 
                        id="auctionId" 
                        label = "Auction Id"
                        variant="outlined"
                        autoComplete="auctionId"
                        margin = "dense"
                        
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs>
                    <TextField
                        onChange = {(e)=>setValues({pickup:e.target.value}) }
                        id="filled-multiline-static"
                        label="Pickup location"
                        multiline
                        rows="2"
                        margin="dense"
                        variant="outlined"
                    />

                    <TextField
                        onChange = {(e)=>setValues({drop:e.target.value}) }
                        id="filled-multiline-static"
                        label="Drop location"
                        multiline
                        rows="2"
                        margin="dense"
                        variant="outlined"
                        
                    />
                </Grid>
                <Grid item xs>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <TextField
                                onChange = {(e)=>setValues({startingPrice:e.target.value}) }
                                id="filled-multiline-static"
                                label="Starting price"
                                margin="dense"
                                variant="outlined"
                            />
                            <DatePicker
                                inputVariant="outlined"
                                disableToolbar
                                label="Date"
                                format='dd-MMM-yyyy'
                                disablePast
                                margin="dense"
                                
                            /> 
                        </Grid>
                        <Grid item xs>
                            <TextField
                                onChange = {(e)=>setValues({minDecrement:e.target.value}) }
                                id="filled-multiline-static"
                                label="Min decrement"
                                margin="dense"
                                variant="outlined"
                            />
                            <TimePicker
                                disableToolbar
                                label="Time"
                                ampm={false}
                                margin="dense"
                                onChange={handleTime}
                                inputVariant="outlined"
                                
                            />
                            
                        </Grid>
                        
                    </Grid>
                </Grid>
                
            </Grid>
        </MuiPickersUtilsProvider>
        </div>
    )
}

Step1.propTypes = {
    auction : PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auction : state.auction
})

export default connect(mapStateToProps,{})(Step1)
