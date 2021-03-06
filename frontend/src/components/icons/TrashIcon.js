import React from 'react'

const TrashIcon = (props) => {
    return (
        <svg 
            id="SvgjsSvg1011" 
            width={props.width}
            height={props.height} 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
        >
            <defs id="SvgjsDefs1012"></defs>
            <g 
                id="SvgjsG1013" 
                transform="matrix(1,0,0,1,0,0)"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width={props.width}
                    height={props.height}
                >
                    <path 
                        d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" 
                        fill={props.fill ? props.fill : '#4c4c4c'} 
                        className="color000 svgShape"
                    ></path>
                </svg>
            </g>
        </svg>
    )
}

export default TrashIcon
