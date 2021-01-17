import React from 'react';
import HomeButton from "../homeButton";

const Item = (title, text) => {
    return <div className="w-1/3">
        <div className="text-playscapes-pink-dark text-center text-lg">
            {title}
        </div>
        <div className="text-playscapes-purple-light text-center mt-5">
            {text}
        </div>
    </div>
};

const Items = [
    Item("Convening and Facilitating Conversations", "Some important conversations end because it can be excruciatingly difficult to know where to begin, and our anxiety about what might happen if we speak up leads us to censor ourselves. Convening and facilitating conversations about difficult topics is at the heart of our work. We have experience doing this in a range of different forums and formats. From working with small executive boards to very large group conversations and town halls. Often we will use techniques from applied theatre to pose questions as an entry point, or to dig into topics, and sometimes we won’t. We are deeply interested in co-creation, and remaining agile and improvisational in this work."),
    Item("Coaching and Mentoring", "Matthew is a profoundly experienced and internationally respected executive coach, who takes on a limited number of clients. If you think you might benefit from working with him, feel free to reach out. We offer a group coaching service as well as mentorship for coaches, consultants, and people professionals interested in working with privilege, conflict, and diversity and inclusion."),
    Item("Consulting Services", "In our work we draw attention to the complex social patterns emerging in groups which can make decision-making and collaborative action challenging, and erode the quality of conversation in groups. We make use of improvisational techniques to unlock creativity, build a sense of creativity, and make productive use of conflict, uncertainty, difference, and doubt. As a result we are able to support the emergence of new ideas and provide ongoing process support for dynamically steering through complex and ambiguous circumstances. We also offer support with developing effective diversity and inclusion policies."),
    Item("Training", "We offer training in Nonviolent Communication, conflict resolution, improvisational theatre, facilitation skills, diversity and inclusion, and a range of other topics. Our approach to training is highly interactive and co-creative, and always linked to helping participants to engage directly with the real challenges they are facing and practice taking their own experience more seriously."),
    Item("Supervision", "Providing ad hoc and ongoing support to community activists, coaches, consultants, mediators, and human resource professionals working with power, privilege, difference, and strong emotions in organisational contexts. We run both public and in-house supervision groups."),
    Item("Conflict Resolution", "Using tools from forum theatre and Nonviolent Communication to mediate conflict, arriving not only at good enough next steps, but building deeper trust and connection in groups, and dynamically evolving new skills and novel approaches to challenging and emotionally volatile conversations and decision-making challenges.")
]


const WhatWeCouldDoTogetherComponent = () => {
    return <div className="flex flex-col">
        <HomeButton />
        <div className="flex flex-row space-x-5 mt-10">
            {Items[0]}
            {Items[1]}
            {Items[2]}
        </div>
        <div className="flex flex-row space-x-5 mt-5">
            {Items[3]}
            {Items[4]}
            {Items[5]}
        </div>
    </div>
}

export default WhatWeCouldDoTogetherComponent