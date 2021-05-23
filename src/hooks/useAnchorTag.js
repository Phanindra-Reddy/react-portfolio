import React from 'react'

const useAnchorTag = ({name, link, info}) => {
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer">{name} </a>
        </>
    )
}

export default useAnchorTag;
