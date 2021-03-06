import React from 'react';
import {Router, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

import customHistory from "../customHistory";
import HeaderContainer from "./header/HeaderContainer";
import HompageContainer from "./homepage/homepage";
import WhoWeAre from "./who-we-are/whoWeAre";
import WhoWeAreDetailContainer from "./who-we-are-detail/whoWeAreDetailContainer";
import WhatWeCouldDoTogetherComponent
    from "./what-we-could-do-together/whatWeCouldDoTogetherComponent";
import GetInContact from "./get-in-contact/getInContactComponent";
import PlayscapesPresents from "./whats-coming-up/playscapesPresentsComponent";
import NVCComponent from "./whats-coming-up/nvcComponent";
import Footer from "./footer/footer";

function App() {
    return <div className="bg-playscapes-purple min-h-screen">
        <Helmet>
            <title>PlayScapes</title>
            <meta name="description" content="PlayScapes"/>
            <meta name="robots" content="index,follow"/>
        </Helmet>
        <div className="container mx-auto max-w-10xl pb-20">
            <Router history={customHistory}>
                <div>
                    <Route path="/" component={HeaderContainer}/>
                    <Route path="/" exact component={HompageContainer}/>
                    <Route path="/who-we-are" exact component={WhoWeAre}/>
                    <Route path="/who-we-are/:teamMember" exact
                           component={WhoWeAreDetailContainer}/>
                    <Route path="/whats-coming-up/playscapes-presents" exact
                           component={PlayscapesPresents}/>
                    <Route path="/whats-coming-up/nonviolent-communication" exact
                           component={NVCComponent}/>
                    <Route path="/what-could-we-do-together" exact
                           component={WhatWeCouldDoTogetherComponent}/>
                    <Route path="/get-in-contact" exact component={GetInContact}/>
                    <Route path="/" component={Footer}/>
                </div>
            </Router>
        </div>
    </div>;
}

export default App;
