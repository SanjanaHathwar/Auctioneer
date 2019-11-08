import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import Select from 'react-select';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';


const Step1 = ({auction : {items}}) => {
    const selectStyles = {
        menu: base => ({
          ...base,
          zIndex: 100
        })
    }

    return (
        <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={1} >
                <Grid item xs>
                    <Select
                        style={{background:"transparent"}}
                        className="select"
                        styles={selectStyles}
                        options={items.map(suggestion => ({
                                    value: suggestion.itemId,
                                    label: suggestion.itemName,
                                }))}     

                        // onChange={this.handleSelect}
                        name="single"
                        placeholder="Enter product"
                        isClearable
                    />
                </Grid>
                <Grid item xs>
                    <TextField
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
                        id="filled-multiline-static"
                        label="Pickup location"
                        multiline
                        rows="2"
                        margin="dense"
                        variant="outlined"
                        
                    />
                    <TextField
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
                                // onChange={this.handleTime}
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
