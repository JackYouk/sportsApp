import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StadiumIcon from '@mui/icons-material/Stadium';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);


  return (
        <div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                        <BottomNavigationAction label="Courts" icon={<StadiumIcon />} />
                        <BottomNavigationAction label="Teams" icon={<GroupsIcon />} />
                        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
  );
}