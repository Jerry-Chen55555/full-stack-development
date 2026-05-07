import Season from "./Season"

const Show = ({ show }) => show.map((season) => (<Season key={season.id} season={season} />))

export default Show