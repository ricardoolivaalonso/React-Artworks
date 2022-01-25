import { useEffect, useState } from "react"

const FetchAW = async(q) => {
    const [artworks, setArtworks] = useState([])    
    const [loading, setLoading] = useState(false)    

    const getURL = async() =>{
        try {
            setLoading(true)
            const list = []
            const url = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${q}&limit=20`)
            const res = await url.json()
            
            res.data.map( r => list.push({id: r.id}))
            getID(list)

        } catch (error) {}
    } 
    
    const getID = async(list) => {
        try {
            const promises = list.map( async l => {
                let items
                const url = await fetch(`https://api.artic.edu/api/v1/artworks/${l.id}`)
                const res = await url.json()

                return items = {
                    author: res.data.artist_title, 
                    title: res.data.title, 
                    imageID: res.data.image_id,
                    description: res.data.exhibition_history
                }
            })
        
            const results = await Promise.all(promises)
            getAW(results)

        } catch (error) {}
    }
    
    const getAW = async(images) => {
        try {
            const promises = images.map( async i  => {
                let aws
                const url = await fetch(`https://www.artic.edu/iiif/2/${i.imageID}/full/600,/0/default.jpg`)
                const res = url.url                
                return aws = { ...i, imageURL: res }
            })

            const results = await Promise.all(promises)
            setArtworks(results)
            setLoading(false)

        } catch (error) {}
    }

    useEffect(()=>{
        getURL()
    },[q])

    return {artworks, loading}
}

export { FetchAW }