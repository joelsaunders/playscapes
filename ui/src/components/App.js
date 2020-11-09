import React from 'react';
import {Router} from "react-router-dom";
import {Helmet} from "react-helmet";

import customHistory from "../customHistory";

function App() {
    return <div className="bg-gray-100 min-h-screen">
        <Helmet>
            <title>PlayScapes Incorporated Ltd. .COM</title>
            <meta name="description" content="PlayScapes"/>
            <meta name="robots" content="index,follow"/>
        </Helmet>
        <div className="container mx-auto p-2 max-w-5xl">
            <Router history={customHistory}>
                <div>
                    Hello There!
                </div>
            </Router>
        </div>
    </div>;
}

export default App;
