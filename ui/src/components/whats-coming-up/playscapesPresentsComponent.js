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
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-struggling-to-find-my-voice-tickets-139724001249"
                    image="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_10/v1613927519/playscapes/sushil-nash-cv2mfx1ylmq-unsplash.jpg"
                    name="PlayScapes Presents... An Improvisational Look at Struggling to Find My Voice"
                    date="23/03/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-terrible-meetings-tickets-142387704457"
                    image="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_10/v1613927523/playscapes/daniel-mingook-kim-pd-boa-mzqs-unsplash.jpg"
                    name="PlayScapes Presents... An Improvisational Look at Terrible Meetings"
                    date="20/04/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-losing-my-temper-tickets-142387943171"
                    image="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_10/v1613927523/playscapes/aaron-blanco-tejedor-vbe9zj-jhbs-unsplash.jpg"
                    name="PlayScapes Presents... An Improvisational Look at Losing My Temper"
                    date="25/05/2021 18:00 GMT"
                />
                <EventItem
                    link="https://www.eventbrite.co.uk/e/playscapes-presentsan-improvisational-look-at-racism-tickets-142388177873"
                    image="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_10/v1613927519/playscapes/clay-banks-gip2lcwslv4-unsplash.jpg"
                    name="PlayScapes Presents... An Improvisational Look at Racism"
                    date="29/06/2021 18:00 GMT"
                />
            </div>
        </div>
    </div>
}

export default PlayscapesPresents