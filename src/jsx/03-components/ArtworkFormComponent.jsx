import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

const ArtworkFormComponent = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const sendForm = (e) => {
        e.preventDefault()
        input.length > 1 && navigate(`/artworks/search/${input}`)
    }

    return(
        <form className="artworks__form" onSubmit={(e)=>sendForm(e)}>
            <input className="artworks__form-input" type="text" placeholder="Search" value={input} minLength={2} onChange={(e)=>setInput(e.target.value)}/>
            <button className="artworks__form-button" type="submit">Search</button>
        </form>
    )
}

export { ArtworkFormComponent }