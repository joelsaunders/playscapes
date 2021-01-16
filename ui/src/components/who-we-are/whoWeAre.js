import React from 'react';


const TeamMemberItem = (name, imgUrl, text) => {
    return <div
        className="flex flex-col ml-5 mr-5 my-6 rounded shadow-lg bg-white-overlay-01dp max-w-xl">
        <div className="flex flex-row flex-grow">
            <div className="flex flex-col w-1/4 mr-2 ml-5 mt-5">
                <div className="w-full">
                    <img className="object-cover rounded" src={imgUrl}/>
                </div>
                <div className="mt-5 text-playscapes-pink-dark text-2xl">
                    {name}
                </div>
            </div>
            <div className="w-3/4 text-playscapes-purple-light m-5 mb-0">
                {text}
            </div>
        </div>
        <div>
            <a href={`/who-we-are/${name}`} >
                <svg className="float-right m-5 mt-0 bg-playscapes-pink-dark rounded-full w-12 p-2"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </a>
        </div>
    </div>


}

const teamMembers = [
    TeamMemberItem(
        "Jo Wood",
        "https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_auto/v1609327071/playscapes/jo-profile_dpgvad.jpg",
        "Jo is a keen critical thinker who enjoys the messy process of uncovering assumptions and possibilities. Even though it is often uncomfortable, she likes to challenge the way she has been taught things ‘should’ be. Over the past four years she has worked at RISE Beyond, a leadership consultancy. An experience that was new and uncomfortable for her, but which she has learnt a lot from, the skill of drawing people’s attention to what is going on in the room (and sometimes even how it relates to what is not in the room!) She lives in London."
    ),
    TeamMemberItem(
        "Matthew Rich-Tolsma",
        "https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_auto/v1609327072/playscapes/Matthew-profile_izq0ug.jpg",
        "After more than a decade of trying to find himself and transform the world, Matthew slowly began to recognise that it might be more helpful to focus on learning to understand and creatively bear with who he was and the world he was living in now. He draws on a rich background in critical education, Nonviolent Communication, organisational consulting, developmental psychology, complexity thinking, and improvisational theatre to participate in conversations with people in organisation and communities about taking their experience of working and living together more seriously. He is South African and Dutch and lives (primarily) in The Netherlands."
    )
]


const WhoWeAre = () => {
    return <div className="flex flex-col items-center justify-center mt-10">
        {/*<img src="https://res.cloudinary.com/dceeo2a79/image/upload/f_auto,q_auto:best/v1604947056/playscapes/Selection_555.png" alt="playscapes logo" />*/}
        <div className="mt-5 text-white text-2xl">Who we are</div>
        <div className="flex md:flex-row mt-20 flex-col">
            {teamMembers}
        </div>
    </div>
};

export default WhoWeAre