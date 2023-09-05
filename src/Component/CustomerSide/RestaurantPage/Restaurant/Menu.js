import React from "react"
import "./menu.css"
import Food from "../../../Food/Food";
function Menu()
{
    return(<div className="menu">
           <div className="scrollitem">
            <div className="navfood">
               
                   <a href="#burger" className="navitem">
                    Burger
                   </a> 
                   <a href="#pizza" className="navitem">
                    Pizza
                   </a>
            </div>

           </div>

           <div className="categorylist">
           <section id="burger" className="foodshow">
            <div className="category">
            Burger
            </div>
            <div className="foodshow">
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
            </div>
                 
           </section>
           <section id="pizza" className="foodshow" >
           <div className="category">
            Pizza
            </div>
            <div className="foodshow">
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
                  <Food />
            </div>
           </section>
           </div>
    </div>)
}

export default Menu;