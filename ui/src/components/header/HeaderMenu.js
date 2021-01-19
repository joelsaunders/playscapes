import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';

const HeaderItems = {
    'Who we are': '/who-we-are',
    'What could we do together?': '/what-could-we-do-together',
    'What\'s coming up?': '/whats-coming-up',
    // 'Resources': '/resources',
    'Get in contact': '/get-in-contact',
};


const highlightedPath = (currentPath, path) => {
    return currentPath === path ? 'text-playscapes-pink-dark' : 'text-playscapes-purple-light';
}


const SubMenuLink = ({text, onCloseMenu, path, currentPath}) => {
    return <Link onClick={onCloseMenu}
                 className={`${highlightedPath(currentPath.split("/")[2], path.split("/")[2])} 
                      inline-block w-full md:w-48 md:p-2 text-playscapes-purple-light md:text-playscapes-purple
                      ml-5 md:pl-2 md:ml-0 md:mt-0 mt-4 md:hover:text-playscapes-purple-light`}
                 to={path}>
        {text}
        <svg className="ml-5 inline-block w-5 md:hidden" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
    </Link>
}


const MenuItem = ({title, path, currentPath, onCloseMenu}) => {
    const highlighted = highlightedPath(currentPath.split("/")[1], path.split("/")[1])

    return <div className="block mt-4 md:inline-block md:mt-0 mr-4 ml-4">
        {path === '/whats-coming-up' ?
            <div className="relative group">
                <div className={`${highlighted} md:hover:text-playscapes-purple-lighter`}>
                    {title}
                </div>
                <div className="md:absolute md:hidden group-hover:block md:bg-playscapes-pink-dark md:rounded">
                    <SubMenuLink text="PlayScapes Presents..." onCloseMenu={onCloseMenu} path="/whats-coming-up/playscapes-presents" currentPath={currentPath} />
                    <SubMenuLink text="Nonviolent Communication" onCloseMenu={onCloseMenu} path="/whats-coming-up/nonviolent-communication" currentPath={currentPath} />
                </div>
            </div>
            : <Link to={path} className={`${highlighted} hover:text-playscapes-purple-lighter`}
                    onClick={onCloseMenu}>
                {title}
                <svg className="ml-5 inline-block w-5 md:hidden" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </Link>
        }
    </div>
};

const HeaderMenu = ({currentPath, onCloseMenu}) => {
    return <div>
        {_.map(HeaderItems, (value, key) => {
            return <MenuItem key={key} title={key} path={value} currentPath={currentPath}
                             onCloseMenu={onCloseMenu}/>
        })}
    </div>
};

export default HeaderMenu;
