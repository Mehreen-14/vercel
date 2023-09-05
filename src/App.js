import React from "react";
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import Welcome from "./components/welcompage.jsx";
import HomePage from "./routes/Home.jsx";
import Restaurant from "./Pages/CustomerPages/Restaurant/restaurant.js";


function App() {
    const [signIn, toggle] = React.useState(true);
     return(
        <GlobalContextProvider>
            <Router>
                <Routes >
                    <Route exact path="/" Component={Welcome}/>
                    <Route exact path="/Restaurant" Component={Restaurant}/>  
                </Routes >
            </Router>
        </GlobalContextProvider>
     )
}

export default App;