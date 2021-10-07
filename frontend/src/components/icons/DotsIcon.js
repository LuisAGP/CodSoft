import React from 'react'

const DotsIcon = (props) => {
    return (
        <svg 
            id="SvgjsSvg1093" 
            width={props.width} 
            height={props.height} 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
        >
            <defs id="SvgjsDefs1094"></defs>
            <g 
                id="SvgjsG1095" 
                transform="matrix(1,0,0,1,0,0)"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    width={props.width} 
                    height={props.height}
                >
                    <path 
                        d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z" 
                        fill={props.fill ? props.fill : '#4c4c4c'} 
                        className="color000 svgShape"
                    ></path>
                </svg>
            </g>
        </svg>
    )
}

export default DotsIcon
