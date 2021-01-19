import React from 'react';
import HomeButton from "../homeButton";

const GetInContact = () => {
    return <div className="flex flex-col px-5 md:px-0">
        <HomeButton />
        <div className="flex justify-center mt-5 text-playscapes-pink-dark text-2xl">
            We'd love to hear from you
        </div>
        <p className="inline-block text-center mt-5 text-playscapes-purple-light text-xl">
            Send us an email! <a className="ml-1 inline"
                                 href="mailto:hello@playscapespresents.com">hello@playscapespresents.com</a>
        </p>
        <div className="flex justify-center mt-10 text-lg text-playscapes-pink-dark">
            Check out our latest YouTube video
        </div>
        <div className="flex justify-center mt-5">
            <iframe title="youtube video" width="560" height="315" src="https://www.youtube.com/embed/r6eC4OvcR4g"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
        </div>
    </div>
};

export default GetInContact;