import React, { useState } from 'react'

function Song ({name}) {
    const[liked, setLiked] = useState(false)

    const handleClick = () => {
        setLiked(!liked)
    }

    return(
        <li>
            {name}
            <button onClick={handleClick}>
                {liked ? 'Liked' : 'Like?'}
            </button>
        </li>
    )
}

export default Song