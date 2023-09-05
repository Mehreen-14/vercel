import React from "react";

import "./Food.css"
import {Add} from '@mui/icons-material';

function Food()
{
       return (
        <div className="foodContainer">
            
            <div className="foodimage">
                    <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" />
                    </div>
           <div className="food">
          
            <div className="des">
                    <div className="foodName">burger</div>
                    <div className="fooddescription">valo</div>
            </div>  
            <div className="MoneyPlus">
            <div className="Money"> Tk. 150</div>
            <button className="plusbutton"><Add/></button>
            </div>  
            </div>
           
            
        </div>
       )
}

export default Food;