import React from 'react';
import HomeButton from "../homeButton";


const BioCard = (bioItem) => {
    return <div key={bioItem.title}
                className="rounded shadow-lg bg-white-overlay-01dp w-full flex-grow">
        <div className="m-5 text-playscapes-pink-dark text-lg">
            {bioItem.title}
        </div>
        <div className="m-5 text-playscapes-purple-light"
             dangerouslySetInnerHTML={{__html: bioItem.text}}/>
    </div>
};

const BioCardCols = (teamMember) => {
    return <div className="flex flex-row space-x-5 mt-5">
        <div className="flex flex-col w-1/2 space-y-5">
            {teamMember["long-bio-cards"].map((bioItem, idx) => {
                if (idx % 2 === 0) {
                    return BioCard(bioItem)
                }
                return null
            })}
        </div>
        <div className="flex flex-col w-1/2 space-y-5">
            {teamMember["long-bio-cards"].map((bioItem, idx) => {
                if (idx % 2 !== 0) {
                    return BioCard(bioItem)
                }
                return null
            })}
        </div>
    </div>
};


const WhoWeAreDetailComponent = ({teamMember}) => {

    return <div className="flex flex-col px-5">
        <HomeButton/>
        <div
            className="flex flex-col w-full rounded shadow-lg bg-white-overlay-01dp overflow-hidden mt-5">
            <div className="flex row w-full p-5">
                <div className="w-1/4 ml-1 md:ml-5 mt-1 md:mt-5 mr-5 md:pr-10">
                    <img alt={`team member - ${teamMember.name}`}
                         className="w-full rounded-full object-cover" src={teamMember.image}/>
                </div>
                <div className="flex flex-col flex-grow justify-end">
                    <div className="text-playscapes-pink-dark text-3xl md:text-5xl">
                        {teamMember.name}
                    </div>
                    <div className="w-8 md:w-10">
                        <a href={teamMember.linkedin} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="feather feather-linkedin text-playscapes-pink-dark sm:hover:text-playscapes-purple-lighter">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className="p-5 bg-white-overlay-02dp text-playscapes-purple-light">
                {teamMember["short-bio"]}
            </div>
        </div>
        {BioCardCols(teamMember)}
    </div>

};

export default WhoWeAreDetailComponent