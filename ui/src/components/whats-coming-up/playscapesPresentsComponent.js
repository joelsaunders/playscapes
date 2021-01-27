import React from 'react';
import HomeButton from "../homeButton";
import EventItem from "./eventItemComponent";


const PlayscapesPresents = () => {

    return <div className="flex flex-col justify-center px-5 md:px-0">
        <HomeButton/>
        <div className="flex justify-center text-2xl text-playscapes-pink-dark mt-5">
            PlayScapes Presents...
        </div>
        <div
            className="flex flex-col md:flex-row justify-center mt-10 text-playscapes-purple-light w-full md:space-x-10 space-y-5 md:space-y-0">
            <div className="w-full text-center flex flex-col md:w-1/2">
                <p>
                    PlayScapes Presents… is PlayScapes’ monthly applied theatre online drop-in event
                    paying attention to topics of diversity, power, position, privilege, prejudice,
                    oppression, collaboration/conflict, and inclusion/exclusion in participants
                    experience of organisational and community life.
                </p>
                <p className="mt-5">
                    Typically we are joined by people working in a range of different
                    organisational
                    contexts who are interested in these topics, as well as by actors /
                    improvisers. The
                    events are very lively and interactive and require some willingness to share
                    your
                    experience with the group, but you will not be under any obligation to do or
                    say
                    anything you do not want to and no prior improvisation experience is
                    expected.
                </p>
            </div>
            <div className="flex flex-col space-y-5 w-full md:w-1/2">
                <div
                    className="text-playscapes-pink-dark text-2xl text-center mt-10 md:mt-0">Events
                </div>
                <EventItem
                    link="https://www.eventbrite.com/e/playscapes-presents-an-improvisational-look-at-encounters-with-privilege-tickets-138169152655"
                    image="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_auto/v1611769546/playscapes/eventbrite_banner__1_.png"
                    name="PlayScapes Presents... An Improvisational Look at Encounters with Privilege"
                    date="23/02/2021 18:00 GMT"
                />
            </div>
        </div>
    </div>
}

export default PlayscapesPresents