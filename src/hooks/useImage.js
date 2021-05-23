import React from 'react'

const styles = {
    width:"100px",
}

const useImage = ({name}) => {
    return (
        <>
            <img
                src={name}
                alt={name}
                className="img-fluid p-3"
                style={styles}
            />
        </>
    )
}

export default useImage
