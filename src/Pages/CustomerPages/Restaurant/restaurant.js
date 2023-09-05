import React from "react";
import './restaurant.css'
import Sidebar from "../../../Component/CustomerSide/RestaurantPage/Sidebar/sidebar";
import Rightbar from "../../../Component/CustomerSide/RestaurantPage/Rightbar/rightbar";
import Cartinfo from "../../../Database/DemoDatabase";
import Menu from "../../../Component/CustomerSide/RestaurantPage/Restaurant/Menu";
function Restaurant()
{
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu/>
           <Rightbar CartArray={Cartinfo}/>
        </div>
    )
}
export default Restaurant;