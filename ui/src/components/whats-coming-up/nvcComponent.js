import React, {useEffect, useState} from 'react';
import HomeButton from "../homeButton";
import EventItem from "./eventItemComponent";
import {getList} from "../../apis/events";


const NVCComponent = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        let mounted = true;
        getList('NVC').then(
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
            Nonviolent Communication
        </div>
        <div
            className="flex flex-col md:flex-row justify-center mt-10 text-playscapes-purple-light w-full md:space-x-10 space-y-5 md:space-y-0">
            <div className="w-full text-center flex flex-col md:w-1/2">
                <p>
                    Nonviolent Communication (NVC) is a transformative approach to building greater
                    compassion and connection with ourselves and others, and a highly effective tool
                    for working with difference, collaborating, and making decisions more
                    effectively and efficiently. NVC was created by Marshall B. Rosenberg
                    (1934-2015), an American psychologist who studied with Carl Rogers and spent
                    more than four decades travelling the world teaching nonviolence and supporting
                    peaceful conflict resolution. NVC is now taught around the world by more than
                    600 certified trainers and many other enthusiastic and skilful practitioners.
                </p>
                <p className="mt-5">
                    Matthew trained with Marshall in 2007 as well as with a wide number of other
                    trainers. He has been a certified trainer since 2012, and has taught NVC in a
                    wide range of contexts in Africa, Asia, Europe, and North America, including
                    being selected as a trainer for the Center for Nonviolent Communication’s
                    International Intensive Training and Virtual Intensive Training. He has a
                    particular interest in using NVC in the context of education, diversity, and
                    conflict. Joanne has been teaching NVC with Matthew for a number of years. At
                    PlayScapes we offer a range of public NVC trainings as well as NVC-based
                    training and coaching for organisations.
                </p>
            </div>
            <div className="flex flex-col space-y-5 w-full md:w-1/2">
                <div className="text-playscapes-pink-dark text-2xl text-center mt-10 md:mt-0">Events</div>
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

export default NVCComponent