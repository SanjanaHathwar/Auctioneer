import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';
import AddBidder from '../sidebar/AddBidder';
import MainTab from '../tabs/MainTab';
import CreateAuction from '../sidebar/CreateAuction';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
	background:'#23374D 0% 0% no-repeat padding-box',
	borderRadius: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
	whiteSpace: 'nowrap',
	background:'#23374D 0% 0% no-repeat padding-box',
    borderRadius: 0
  },
  
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  paper: {
	background:'#23374D 0% 0% no-repeat padding-box',
	borderRadius: 0,
	
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{minHeight: 61}}>
          <Typography variant="h6" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
	
        variant="permanent"
		classes = {{
			paper: classes.paper
		}}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
       
        open={open}
      >
        <div className={classes.toolbar}>
        </div>
        <Divider style={{background:'#E5E5E5'}}/>
			<List>
			<ListItem button>
				<CreateAuction/>
			</ListItem>
			<ListItem button>
				<AddBidder/>
			</ListItem>
			
			</List>
      </Drawer>
      <main className={classes.content}>
	  <div className={classes.toolbar} />
        <MainTab/>
      </main>
    </div>
  );
}