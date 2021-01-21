import React from 'react';


const Footer = () => {
    return <div className="flex justify-center mt-10 space-x-5">
        <a href="https://www.linkedin.com/company/playscapespresents" className="w-8 text-playscapes-pink-dark hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                 strokeLinejoin="round" className="feather feather-linkedin">
                <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCZw6QN3MDCoKxNUdDS3sxeg" className="w-10 text-playscapes-pink-dark hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                 strokeLinejoin="round" className="feather feather-youtube">
                <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
        </a>
    </div>
};

export default Footer