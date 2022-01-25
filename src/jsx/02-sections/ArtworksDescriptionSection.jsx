import { useNavigate, useLocation  } from 'react-router-dom'

const ArtworksDescriptionSection = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const { author, title, imageURL, description } = location.state
 
    return(
        <div className='description'>
            <div className='description__header' style={{backgroundImage: `url('${imageURL}')`}}>
                <div className='description__header-filter'>
                    <h1 className='description__header-title'>{title}</h1>
                </div>
            </div>

            <div className='description__item'>
                <img className='description__item-image' src={imageURL} alt={title} />
                
                <div className='description__item-info'>
                    <h1 className='description__item-title'>{title}</h1>
                    <p className='description__item-author'>{author}</p>
                    <p className='description__item-description'>{description}</p>
                </div>
                <a className="description__item-back" onClick={() => navigate(-1)}>back</a>
            </div>

        </div>
    )
}

export { ArtworksDescriptionSection }