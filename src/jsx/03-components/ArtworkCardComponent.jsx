import { Link } from 'react-router-dom'

const ArtworkCardComponent = ({data}) => {
    const {author, title, imageURL, imageID, description} = data
    const current = { author, title, imageURL, description }

    return(
        <article className='artworks__item'>
            <Link to={`/artworks/description/${imageID}`} state={ current }>
                <img className="artworks__item-image" src={imageURL} loading='lazy'/>

                <div className="artworks__item-meta">
                    <p className="artworks__item-title">{title}</p>
                    <span className="artworks__item-author">{author}</span>
                </div>
            </Link>
        </article>
    )
}

export { ArtworkCardComponent }