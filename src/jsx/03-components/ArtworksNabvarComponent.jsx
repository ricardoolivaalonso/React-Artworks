import { NavLink } from 'react-router-dom'
import { ArtworkFormComponent } from './ArtworkFormComponent'

const ArtworksNabvarComponent = () => {
    return(
        <nav className='artworks__navbar'>
            <NavLink to="trending" className={({isActive})=> isActive ? 'artworks__navbar-item artworks__navbar-item--active' : 'artworks__navbar-item' }>trending</NavLink>
            <NavLink to="latest" className={({isActive})=> isActive ? 'artworks__navbar-item artworks__navbar-item--active' : 'artworks__navbar-item' }>latest</NavLink>
            <ArtworkFormComponent />
        </nav>
    )
}

export { ArtworksNabvarComponent }