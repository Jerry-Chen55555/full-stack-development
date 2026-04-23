const ShowTitle = ({title}) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

const Episode = ({episode}) => {
  return (
    <>
      <p>{episode.name} {episode.views.toLocaleString("en-US")}</p>
    </>
  )
}

const Episodes = ({episodes}) => {
  return (
    <>
      <Episode episode = {episodes[0]} />
      <Episode episode = {episodes[1]} />
      <Episode episode = {episodes[2]} />
    </>
  )
}

const TotalSeasonViews = ({episodes}) => {
  return (
    <>
      <p>
        Seinfeld Season 1, Total Number of Views{" "}
        {(episodes[0].views + episodes[1].views + episodes[2].views).toLocaleString("en-US")}
      </p>
    </>
  )

}

const Season = ({season}) => {
  return (
    <>
      <ShowTitle title={season.season} />
      <Episodes episodes={season.episodes} />
      <TotalSeasonViews episodes={season.episodes} />
    </>
  )
}

const App = () => {
  // const season = "Seinfeld Season 1";
  // const episode1 = "Good News, Bad News";
  // const viewsEp1 = 6905040;
  // const episode2 = "The Stakeout";
  // const viewsEp2 = 3905040;
  // const episode3 = "The Robbery";
  // const viewsEp3 = 4498237;
  const seinfieldSeason1 = {
    season: "Seinfield Season 1",
    episodes: [
      {name: "Good News, Bad News", views: 6905040},
      {name: "The Stakeout", views: 3905040},
      {name: "The Robbery", views: 4498237},
    ]
  }
  return (
    <div>
      <Season season={seinfieldSeason1} />
      {/* <h1>{season}</h1>
      <p>
        {episode1} {viewsEp1}
      </p>
      <p>
        {episode2} {viewsEp2}
      </p>
      <p>
        {episode3} {viewsEp3}
      </p>
      <p>
        Seinfeld Season 1, Total Number of Views{" "}
        {viewsEp1 + viewsEp2 + viewsEp3}
      </p> */}
    </div>
  );
};

export default App;