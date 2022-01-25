import { useState } from "react"
import { FetchAW } from "../00-helpers/00-fetch"
import { ArtworkCardComponent } from "../03-components/ArtworkCardComponent"

const ArtworksLatestSection = () => {
    const [artworks, setArtworks] = useState([])    
    const [loading, setLoading] = useState(false)   

    FetchAW('su').then( aw => {
        setArtworks(aw.artworks) 
        setLoading(aw.loading) 
    })
    
    return(
        <div className="artworks__list">
            {   
                loading ? 
                    <h1>Searching...</h1>
                    :
                    artworks.map( aw => <ArtworkCardComponent key={aw.imageID} data={aw}/>)
            }
        </div>
    )
}

export { ArtworksLatestSection }