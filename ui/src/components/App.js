import React from 'react';
import {Router, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

import customHistory from "../customHistory";
import HeaderContainer from "./header/HeaderContainer";
import HompageContainer from "./homepage/homepage";
import WhoWeAre from "./who-we-are/whoWeAre";

function App() {
    return <div className="bg-playscapes-purple min-h-screen">
        <Helmet>
            <title>PlayScapes</title>
            <meta name="description" content="PlayScapes"/>
            <meta name="robots" content="index,follow"/>
        </Helmet>
        <div className="container mx-auto p-2 max-w-10xl">
            <Router history={customHistory}>
                <div>
                    <Route path="/" component={HeaderContainer}/>
                    <Route path="/" exact component={HompageContainer}/>
                    <Route path="/who-we-are" exact component={WhoWeAre}/>
                </div>
            </Router>
        </div>
    </div>;
}

export default App;
