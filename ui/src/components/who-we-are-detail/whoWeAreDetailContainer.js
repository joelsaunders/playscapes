import React from 'react';
import WhoWeAreDetailComponent from "./whoWeAreDetailComponent";
import teamMembers from "../../team/teamMembers";

const WhoWeAreDetailContainer = (props) => {
    const teamMemberName = props.match.params.teamMember;
    const teamMember = teamMembers[teamMemberName]

    return <WhoWeAreDetailComponent
        teamMember={{name: teamMemberName, ...teamMember}}
    />
};

export default WhoWeAreDetailContainer;