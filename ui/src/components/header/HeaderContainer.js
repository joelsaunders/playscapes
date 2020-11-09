import React, {useState} from 'react';
import Header from "./Header";


const HeaderContainer = (props) => {
    const[menuOpen, setMenuOpen] = useState(false);

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return <Header
        onMenuClick={onMenuClick}
        menuOpen={menuOpen}
        currentPath={props.location.pathname}
    />
};

export default HeaderContainer;
