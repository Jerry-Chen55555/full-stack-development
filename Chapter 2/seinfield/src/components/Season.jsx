const Season = ({season}) => {
    return (
        <>
            <h2>{season.title}</h2>
            {season.episodes.map((episode)=>(<p key={episode.id}>{episode.title} - Views: {episode.views}</p>))}
        </>
    )
}

export default Season