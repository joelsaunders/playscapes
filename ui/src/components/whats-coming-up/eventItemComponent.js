import React from "react";

const EventItem = ({image, link, name, date}) => {
    return <a className="w-full"
              href={link}
              target="blank">
        <div className="flex rounded shadow-lg bg-white-overlay-01dp hover:opacity-75">
            <img className="w-1/2 object-cover"
                 src={image}/>
            <div className="flex flex-col">
                <div className="m-5">
                    {name}
                </div>
                <div className="m-5 mt-0 ">
                    <p className="opacity-50">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    </a>
}

export default EventItem