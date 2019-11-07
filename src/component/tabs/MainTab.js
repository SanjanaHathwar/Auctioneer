import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
	flexGrow: 1,
	background: "#E5E5E5 0% 0% no-repeat padding-box",
	font: "Light 20px/26px Roboto"

  },
});

export default function MainTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
		<Tabs
			value={value}
			onChange={handleChange}
			indicatorColor="primary"
			textColor="primary"
			centered
		>
			<Tab style={{font: "Light Roboto",fontSize:18,textTransform:"none"}} label="Active Auctions" >
				<span>Hello1</span>
			</Tab>
			<Tab style={{font: "Light Roboto",fontSize:18,textTransform:"none"}} label="History">
			2
			</Tab>
			<Tab style={{font: "Light Roboto",fontSize:18,textTransform:"none"}} label="Notification">
			3
			</Tab>
		</Tabs>
    </Paper>
  );
}
