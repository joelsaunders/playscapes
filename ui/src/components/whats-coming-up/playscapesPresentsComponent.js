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
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-struggling-to-find-my-voice-tickets-139724001249"
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124951607%2F156222267191%2F1%2Foriginal.20210202-204025?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=692f354787ce2a8dcbd5fad2dd1119c4"
                    name="PlayScapes Presents... An Improvisational Look at Struggling to Find My Voice"
                    date="23/03/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-terrible-meetings-tickets-142387704457"
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126742725%2F156222267191%2F1%2Foriginal.20210221-101336?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=5ca027c0641094fd55b6b93cc2f3756f"
                    name="PlayScapes Presents... An Improvisational Look at Terrible Meetings"
                    date="20/04/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-losing-my-temper-tickets-142387943171"
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126743019%2F156222267191%2F1%2Foriginal.20210221-102605?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ea8f7c7cebe6ec07b9c1c97206544a0a"
                    name="PlayScapes Presents... An Improvisational Look at Losing My Temper"
                    date="25/05/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-racism-tickets-142388177873"
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126743307%2F156222267191%2F1%2Foriginal.20210221-103617?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ca871a4111f68c9f9ac04b81f7d7391e"
                    name="PlayScapes Presents... An Improvisational Look at Racism"
                    date="29/06/2021 18:00 GMT"
                />
            </div>
        </div>
    </div>
}

export default PlayscapesPresents