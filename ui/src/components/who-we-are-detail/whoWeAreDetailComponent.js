import React from 'react';


const BioCard = (bioItem) => {
    return <div className="rounded shadow-lg bg-white-overlay-01dp w-full">
        <div className="m-5 text-playscapes-pink-dark">
            {bioItem.title}
        </div>
        <div className="m-5 text-playscapes-purple-light" dangerouslySetInnerHTML={{__html: bioItem.text}} />
    </div>
};

const BioCardCols = (teamMember) => {
    return <div className="flex flex-row space-x-5 mt-5">
        <div className="flex flex-col w-1/2 space-y-5">
            {teamMember["long-bio-cards"].map((bioItem, idx) => {
                if (idx % 2 === 0) {
                    return BioCard(bioItem)
                }
            })}
        </div>
        <div className="flex flex-col w-1/2 space-y-5">
            {teamMember["long-bio-cards"].map((bioItem, idx) => {
                if (idx % 2 !== 0) {
                    return BioCard(bioItem)
                }
            })}
        </div>
    </div>
};


const WhoWeAreDetailComponent = ({teamMember}) => {

    return <div className="flex flex-col mt-10">
        <div
            className="flex flex-col w-full rounded shadow-lg bg-white-overlay-01dp overflow-hidden">
            <div className="flex row w-full m-5">
                <div className="w-1/4 ml-5 mt-5 mr-5 pr-10">
                    <img className="w-full rounded-full object-cover" src={teamMember.image}/>
                </div>
                <div className="flex flex-grow">
                    <div className="self-end text-playscapes-pink-dark text-5xl">
                        {teamMember.name}
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