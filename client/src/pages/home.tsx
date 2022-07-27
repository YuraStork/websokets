import { Link } from "react-router-dom"

export const HomePage = () => {
  return <div>
    Draw online  <Link to="/draw_online">Draw</Link> or
    <Link to="/draw">Train</Link>
  </div>
}