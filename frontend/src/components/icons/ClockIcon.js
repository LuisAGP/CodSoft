import React from 'react'

const ClockIcon = (props) => {
    return (
        <svg 
            id="SvgjsSvg1026" 
            width={props.width} 
            height={props.height}
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs id="SvgjsDefs1027"></defs>
            <g id="SvgjsG1028" transform="matrix(1,0,0,1,0,0)">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    data-name="Layer 1" 
                    viewBox="0 0 24 24" 
                    width={props.width} 
                    height={props.height}>
                    <path 
                        d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM12,6a.99974.99974,0,0,0-1,1v4.749L9.61816,14.32666a1.00029,1.00029,0,0,0,1.76368.94434l1.5-2.79883A1.00586,1.00586,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Z" 
                        fill={props.fill ? props.fill : '#4c4c4c'} 
                        className="color000 svgShape">
                    </path>
                </svg>
            </g>
        </svg>
    )
}

export default ClockIcon
