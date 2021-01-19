import React, {useState, useEffect} from 'react';
import Header from "./Header";


const HeaderContainer = (props) => {
    const[menuOpen, setMenuOpen] = useState(false);

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const onCloseMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        menuOpen && (document.body.style.overflow = 'hidden');
        return () => document.body.style.overflow = 'unset';
    }, [menuOpen])

    return <Header
        onMenuClick={onMenuClick}
        onCloseMenu={onCloseMenu}
        menuOpen={menuOpen}
        currentPath={props.location.pathname}
    />
};

export default HeaderContainer;
