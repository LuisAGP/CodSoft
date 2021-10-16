import React from 'react';


const LeftRowIcon = (props) => {
    return (
        <svg 
            width={props.width} 
            height={props.height}
            viewBox="0 0 24 24" 
            id="magicoon-Filled" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>chevron-circle-left</title>
            <g id="chevron-circle-left-Filled">
                <path 
                    id="chevron-circle-left-Filled-2" 
                    fill={props.fill ? props.fill : '#4c4c4c' }
                    data-name="chevron-circle-left-Filled" 
                    d="M12,2.5A9.5,9.5,0,1,0,21.5,12,9.509,9.509,0,0,0,12,2.5Zm1.71,11.79a1.008,1.008,0,0,1,0,1.42,1.014,1.014,0,0,1-1.42,0l-3-3a1.008,1.008,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"
                />
            </g>
        </svg>
    )
}


export default LeftRowIcon