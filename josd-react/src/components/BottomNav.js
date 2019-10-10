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
import InsertChartIcon from '@material-ui/icons/InsertChart';

const useStyles = makeStyles({
    root: {
        width: 400,
    },
});


function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('chanting');

// Scroll to somewhere in the same screen
function handleChange(event, newValue) {
        setValue(newValue);
        if(newValue === 'reading'){
            // console.log("value = " + newValue)
            window.scrollTo(0, 506);
        }else if(newValue === 'chanting'){
            // console.log("value = " + newValue)
            window.scrollTo(0, 0);
        }else if(newValue === 'hearing'){
            // console.log("value = " + newValue)
            window.scrollTo(0, 1006);
        }else if(newValue === 'service'){
            // console.log("value = " + newValue)
            window.scrollTo(0, 1501);
        }else if(newValue === 'chart'){
            // this.props.history.push(`/chart/${this.props.userIdFromMain}/${this.props.recDtFromMain}`);
            window.location.href = 'https://josd-front.azurewebsites.net/chart/'+window.localStorage.getItem("local_user_id");
            
        }
        
}

    return (
        <div>
            <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom}>
            <BottomNavigationAction value="chanting" icon={<PeopleAlt/>} />
            <BottomNavigationAction value="reading" icon={<MenuBookIcon />} />
            <BottomNavigationAction value="hearing" icon={<HeadsetIcon />} />
            <BottomNavigationAction value="service" icon={<RoomServiceIcon />} />
            <BottomNavigationAction value="chart" icon={<InsertChartIcon />} />
            </BottomNavigation>
        </div>
    );
}

export default LabelBottomNavigation;
