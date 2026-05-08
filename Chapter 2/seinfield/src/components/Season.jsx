const Season = ({season}) => {
    const totalViews = season.episodes.reduce((acc, episode) => acc + episode.views, 0);
    return (
        <>
            <h2>{season.title}</h2>
            {season.episodes.map((episode)=>(<p key={episode.id}>{episode.title} - Views: {episode.views}</p>))}
            <p>Total Views: {totalViews}</p>
        </>
    )
}

export default Season