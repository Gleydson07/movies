import { useContext } from "react"
import { WatchmeContext } from "./WatchmeContext"
import { Button } from './Button';

import '../styles/sidebar.scss';

export function SideBar() {
  const {genres, handleClickButton, selectedGenreId} = useContext(WatchmeContext);
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}