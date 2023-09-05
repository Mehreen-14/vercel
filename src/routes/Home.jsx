import React from 'react'
import Test from '../components/test'
import './Sidebar.css'; // Create a separate CSS file for styling
import {Home,LocationOn,Article} from '@mui/icons-material';


const HomePage = () => {
  return(
    <div className="sidebar">
       <div className="Up">
          <div className="Title">FoodXpress</div>
          <div classNam="profile">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2021/08/GettyImages-1205210191-H-2021.jpg?w=1296" alt="profile"/>
          <div className="profileName"><p>Majisha jahan</p></div>
          </div>
          
          
       </div>
       <div className="Mid">
        <button className="Option"><Home className="Icon"/>Home</button>
        <button className="Option"><LocationOn className="Icon"/>Addresses</button>
        <button className="Option"><Article className="Icon"/>Previous Orders</button>
       </div>
       <div className="Down">
        <button className="logoutbutton">Log out</button>
       </div>
    </div>
);
}

export default HomePage
