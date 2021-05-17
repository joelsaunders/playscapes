import React,  { useEffect, useState } from 'react';
import HomeButton from "../homeButton";
import EventItem from "./eventItemComponent";
import {getList} from "../../apis/events";


const PlayscapesPresents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        let mounted = true;
        getList('PP').then(
            items => {
                if (mounted) {
                    setEvents(items)
                }
            }
        )
        return () => mounted = false;
    }, [])

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
                {
                    events.map((event) => {
                        return <EventItem
                            link={event.link_url}
                            image={event.image_url}
                            name={event.name}
                            start_date={event.start_date}
                            schedule_text={event.schedule_text}
                        />
                    })
                }
            </div>
        </div>
    </div>
}

export default PlayscapesPresents