const HomeCardComponent = ({data}) => {
    const { type, title, date, image } = data
    return(
        <article className="home__item">
            <div className="home__item-bg">
                <img className="home__item-image" src={image} alt={title} loading='lazy'/>
            </div>
            <a className="home__item-meta">
                <em className="home__item-type">{type}</em>
                <p className="home__item-title">{title}</p>
                <time className="home__item-date">{date}</time>
            </a>
        </article>
    )
}

export { HomeCardComponent }