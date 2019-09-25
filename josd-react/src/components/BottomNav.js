import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { PeopleAlt } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import HeadsetIcon from '@material-ui/icons/Headset';

const useStyles = makeStyles({
    root: {
        width: 320,
    },
});


function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('chanting');

// Scroll to somewhere in the same screen
function handleChange(event, newValue) {
        setValue(newValue);
        if(newValue === 'reading'){
            console.log("value = " + newValue)
            window.scrollTo(0, 506);
        }else if(newValue === 'chanting'){
            console.log("value = " + newValue)
            window.scrollTo(0, 0);
        }else if(newValue === 'hearing'){
            console.log("value = " + newValue)
            window.scrollTo(0, 1006);
        }else if(newValue === 'service'){
            console.log("value = " + newValue)
            window.scrollTo(0, 1501);
        }
        
}

    return (
        <div>
            <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
            <BottomNavigationAction label="Chanting" value="chanting" icon={<PeopleAlt/>} />
            <BottomNavigationAction label="Reading" value="reading" icon={<MenuBookIcon />} />
            <BottomNavigationAction label="Hearing" value="hearing" icon={<HeadsetIcon />} />
            <BottomNavigationAction label="Service" value="service" icon={<RoomServiceIcon />} />
            </BottomNavigation>
        </div>
    );
}

export default LabelBottomNavigation;
