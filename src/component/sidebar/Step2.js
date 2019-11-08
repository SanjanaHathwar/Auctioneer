import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'


const Step2 = ({suppliers}) => {
    const [invited,setInvited] = useState([])
    const [selected,setSelected] = useState([])

    const handleClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } 
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } 
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } 
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected)
        setInvited(newSelected)

    }

    const isSelected = id =>  invited.indexOf(id) !== -1
    
    
    const handleSelectAllClick = event => {
        if (event.target.checked) {
          const newSelecteds = suppliers.map(n => n.SID);
          setSelected(newSelecteds);
          return;
        }
        setSelected([]);
      };

    return (
        <div>{console.log("yes")}
        
        <Table>
            <TableHead>{console.log(selected)}
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={selected.length > 0 && selected.length < suppliers.length}
                            // checked={numSelected === rowCount}
                            onChange={handleSelectAllClick}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                    </TableCell>
                   
                    <TableCell>Sl No</TableCell>
                    <TableCell>Bidder id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            {/* <TableBody>
            {
               
                suppliers.map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                 

                    return (
                        <TableRow
                            hover
                            onClick={event => handleClick(event, row.SID)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.SID}
                            selected={isItemSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={isItemSelected}
                                    color="primary"
                                />
                            </TableCell>
                            <TableCell align="right">{index}</TableCell>
                            <TableCell align="right">{row.SID}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.contact}</TableCell>
                        </TableRow>
                    );
                })
            }
                
            </TableBody> */}
        </Table>
            
        </div>
    )
}

Step2.propTypes = {
suppliers: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    suppliers : state.auction.suppliers
})

export default connect(mapStateToProps,{})(Step2)
