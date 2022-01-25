import { useState } from "react"
import { useParams  } from 'react-router-dom'
import { FetchAW } from "../00-helpers/00-fetch"
import { ArtworkCardComponent } from "../03-components/ArtworkCardComponent"

const ArtworksSearchSection = () => {
    const {id} = useParams()
    const [artworks, setArtworks] = useState([])    
    const [loading, setLoading] = useState(false)   

    FetchAW(id).then(aw => {
        setArtworks(aw.artworks) 
        setLoading(aw.loading) 
    })

    return(
        <>
            <h1 className="artworks__title">search results: {id}</h1>
            <div className="artworks__list">
                {   
                    loading ? 
                        <h1>Searching...</h1>
                        :
                        artworks.map( aw => <ArtworkCardComponent key={aw.imageID} data={aw}/>)
                }
            </div>
        </>
    )
}

export { ArtworksSearchSection }