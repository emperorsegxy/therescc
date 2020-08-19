import React from 'react'

const ShowcaseText = ({ title, content }) => {
    return (
        <div>
            <h1>We are pasionate<br/>about the <span className="title">{title}</span></h1>
            <p>{content}</p>
        </div>
    )
}

export default ShowcaseText