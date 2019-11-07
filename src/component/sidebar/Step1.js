import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import Select from 'react-select';

const Step1 = ({auction : {items}}) => {
    const selectStyles = {
        menu: base => ({
          ...base,
          zIndex: 100
        })
    }

    return (
        <div>{console.log("yes")}
        <Grid container >
            <Grid item xs>
                <Select
                    style={{background:"transparent"}}
                    className="select"
                    styles={selectStyles}
                    options={items.map(suggestion => ({
                                value: suggestion.itemId,
                                label: suggestion.itemName,
                            }))}     

                    // value={this.state.multi}
                    // onChange={this.handleSelect}
                    name="single"
                    placeholder="Enter product Id"
                    isClearable
                    //isMulti
                />
            </Grid>
        </Grid>
            
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
