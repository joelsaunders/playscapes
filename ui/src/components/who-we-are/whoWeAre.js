import React from 'react';
import HomeButton from "../homeButton";
import {Link} from "react-router-dom";


const TeamMemberItem = (name, imgUrl, text) => {
    return <div
        className="flex flex-col rounded shadow-lg bg-white-overlay-01dp max-w-md" key={name}>
        <div className="flex flex-col flex-grow">
            <div className="flex flex-col w-full h-auto">
                <div className="relative">
                    <img alt={`team member - ${name}`} className="object-cover rounded" src={imgUrl}/>
                    <div className="absolute bottom-0 text-playscapes-pink-dark text-4xl m-5">
                        {name}
                    </div>
                </div>
            </div>
            <div className="text-playscapes-purple-light m-5 mb-0">
                {text}
            </div>
        </div>
        <div className="">
            <Link to={`/who-we-are/${name}`}>
                <svg className="float-right m-5 mt-0 bg-playscapes-pink-dark hover:bg-playscapes-purple-dark hover:text-white rounded-full w-12 p-2"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </Link>
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
    return <div className="flex flex-col items-center justify-center mx-5">
        <HomeButton />
        <div className="flex md:flex-row mt-5 md:mt-10 flex-col md:space-x-16 space-y-5  md:space-y-0">
            {teamMembers}
        </div>
    </div>
};

export default WhoWeAre