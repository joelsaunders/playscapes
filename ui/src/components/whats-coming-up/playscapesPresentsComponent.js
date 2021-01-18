import React, {useEffect} from 'react';
import HomeButton from "../homeButton";

const exampleCallback = function() {
            console.log('Order complete!');
        };


const PlayscapesPresents = () => {
    useEffect(() => {
        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '129296171329',
            iframeContainerId: 'eventbrite-widget-container-129296171329',

            // Optional
            iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        })
    }, [])

    return <div className="flex flex-col justify-center">
        <HomeButton/>
        <div className="flex justify-center text-2xl text-playscapes-pink-dark mt-5">
            PlayScapes Presents...
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-10 text-playscapes-purple-light w-full md:space-x-10 space-y-5 md:space-y-0">
            <div className="w-full text-center flex flex-col md:w-1/2">
                <p>
                    PlayScapes Presents… is PlayScapes’ monthly applied theatre online drop-in event
                    paying attention to topics of diversity, power, position, privilege, prejudice,
                    oppression, collaboration/conflict, and inclusion/exclusion in participants
                    experience of organisational and community life.
                </p>
                <p className="mt-2">
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
            <div className="md:w-1/2 w-full" id="eventbrite-widget-container-129296171329"></div>
        </div>
    </div>
}

export default PlayscapesPresents