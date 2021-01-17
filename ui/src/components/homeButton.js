import React from 'react';
import {Link} from "react-router-dom";


const HomeButton = () => {
    return <div className="flex flex-col mt-5">
        <div className="flex justify-center">
            <Link to="/" className="w-20 rounded-full hover:opacity-75">
                <img className="rounded-full"
                    src="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_auto/v1609328923/playscapes/Untitled_design_73.png"
                    alt="playscapes logo"/>
            </Link>
        </div>
    </div>
}

export default HomeButton;