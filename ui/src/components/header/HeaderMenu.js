import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';

const HeaderItems = {
    'Who we are': '/who-we-are',
    'What could we do together?': '/what-could-we-do-together',
    'What\'s coming up?': 'whats-coming-up',
    // 'Resources': '/resources',
    'Get in contact': '/get-in-contact',
};

const MenuItem = ({title, path, currentPath}) => {
    const highlighted = currentPath === path ? 'text-playscapes-pink-dark' : 'text-playscapes-purple-light';
    return <div className="block mt-4 md:inline-block md:mt-0 mr-4 ml-4">
        <div className="relative group">
            <Link to={path} className={`${highlighted} hover:text-playscapes-purple-lighter`}>
                {title}
            </Link>
            {path === 'whats-coming-up' ?
                <div className="absolute hidden group-hover:block bg-playscapes-pink-dark rounded w-48 p-2 text-playscapes-purple">
                    <Link to="/whats-coming-up/playscapes-presents">PlayScapes Presents...</Link>
                </div>
                : null
            }
        </div>
    </div>
};

const HeaderMenu = ({currentPath}) => {
    return <div>
        {_.map(HeaderItems, (value, key) => {
            return <MenuItem key={key} title={key} path={value} currentPath={currentPath}/>
        })}
    </div>
};

export default HeaderMenu;
