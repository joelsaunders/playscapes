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
                    link="https://www.eventbrite.com/e/playscapes-presents-an-improvisational-look-at-conflict-tickets-129296171329"
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F117811699%2F156222267191%2F1%2Foriginal.20201116-122221?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=2ee7852ddcea354fff4e97b93c71eaf7"
                    name="PlayScapes Presents... An Improvisational Look at Conflict"
                />
            </div>
        </div>
    </div>
}

export default PlayscapesPresents