import React from "react";
import "./cart.css"
import {Remove,Add} from '@mui/icons-material';


//Remove Add
function Cart(props) {
    const [count,changeCount]=React.useState(parseInt(props.cartinfo.count));
  function increase()
   {
    changeCount(count+1)
   }
   function decrease()
   {
    if(count>0)
    changeCount(count-1)
   }
    return (
        <div className="cartContainer">
            <div className="foodinfo">
            <div className="description">
                    <div>{props.cartinfo.foodname}</div>
                    <div>{props.cartinfo.Restaurantname}</div>
                </div>
                <div className="foodImage">
                    <img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000" alt="" />
                </div>
                
            </div>
            <div className="MoneyPlusChangeitemNumber">
            <div className="showMoney"> Tk. {props.cartinfo.MoneyperPiece}</div>
            <div className="itemChange">
            <button className="removeadd" onClick={decrease}><Remove /></button><span className="itemNumber">{count}</span><button className="removeadd" onClick={increase}><Add /></button>
            </div>
            </div>
        </div>
    )
}

export default Cart;