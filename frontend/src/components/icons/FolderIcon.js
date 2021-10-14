import React from 'react'

const FolderIcon = (props) => {
    return (
        <svg 
            id="SvgjsSvg1031" 
            width={props.width}
            height={props.height}
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
        >
            <defs id="SvgjsDefs1032"></defs>
            <g 
                id="SvgjsG1033" 
                transform="matrix(1,0,0,1,0,0)"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width={props.width}
                    height={props.height} 
                    viewBox="0 0 1792 1792"
                >
                    <path 
                        d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" 
                        fill={props.fill ? props.fill : "#4c4c4c"} 
                        className="color000 svgShape"
                    ></path>
                </svg>
            </g>
        </svg>
    )
}

export default FolderIcon
