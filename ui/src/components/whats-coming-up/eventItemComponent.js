import React from "react";

const EventItem = ({image, link, name, date}) => {
    return <a className="w-full"
              href={link}
              target="blank">
        <div className="flex rounded shadow-lg bg-white-overlay-01dp hover:opacity-75 overflow-hidden">
            <div className="w-1/2 self-stretch h-0 flex-shrink">
                <img className="object-cover h-64 md:h-56 w-full"
                 src={image}/>
            </div>
            <div className="flex flex-col w-1/2 h-full">
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