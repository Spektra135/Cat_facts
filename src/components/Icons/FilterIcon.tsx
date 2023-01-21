import * as React from 'react';

interface ILikeIcon {
    like: boolean
}

export function FilterIcon({like}:ILikeIcon) {
    console.log(like);
    
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 971.986 971.986" fill={like ? '#f50707' : '#19c5fa' } stroke='black' strokeWidth='3' strokeLinecap="round" opacity='.5'>
            <g>
                <path d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"/>
            </g>
        </svg>
        
    )
}
