import { Outlet } from "react-router-dom"
import { ArtworksNabvarComponent } from "../03-components/ArtworksNabvarComponent"

const ArtworksPage = () => {
    return(
        <section className="artworks">
            <ArtworksNabvarComponent />
            <Outlet/>
        </section>
    )
}

export { ArtworksPage }