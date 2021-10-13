import React from 'react'

export default function SongLyric({title, lyric}) {
    return (
        <section>
            <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
            <blockquote style={ {whiteSpace: 'pre-wrap'}}>{lyric}</blockquote>
        </section>
    )
}
