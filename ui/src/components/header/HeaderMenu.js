import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';

const HeaderItems = {
    'Why play?': '/why-play',
    'Why rethink?': '/why-rethink',
    'Who are we?': '/who-are-we',
    'What could we do together?': '/what-could-we-do-together',
    'Get in contact': '/get-in-contact',
};

const MenuItem = ({title, path, currentPath}) => {
    const highlighted = currentPath === path ? 'text-playscapes-pink-dark': 'text-playscapes-purple-light';
    return <Link to={path}>
        <div className={`block mt-4 md:inline-block md:mt-0 mr-4 ml-4 ${highlighted} hover:text-playscapes-purple-lighter`}>
            {title}
        </div>
    </Link>
};

const HeaderMenu = ({currentPath}) => {
    return <div>
        {_.map(HeaderItems, (value, key) => {
            return <MenuItem key={key} title={key} path={value} currentPath={currentPath} />
        })}
    </div>
};

export default HeaderMenu;
