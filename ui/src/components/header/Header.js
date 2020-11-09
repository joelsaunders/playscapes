import React from 'react';
import HeaderMenu from "./HeaderMenu";


const Header = (props) => {
    const {menuOpen, onMenuClick} = props;

    return <nav className="flex items-center justify-center flex-wrap bg-playscapes-purple px-6 py-3">
        <div className="block md:hidden">
            <button
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                onClick={onMenuClick}
            >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className={`w-full flex justify-center flex-grow md:flex md:items-center md:w-auto md:items-stretch ${menuOpen? null: 'hidden'}`}>
            <HeaderMenu currentPath={props.currentPath} />
        </div>
    </nav>;
};

export default Header