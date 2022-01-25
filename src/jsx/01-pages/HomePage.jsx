import { HomeCardComponent } from "../03-components/HomeCardComponent"
import { homeData } from "./HomePageData"

const HomePage = () => {
    return(
        <section className="home">
            <div className="home__list">
                { homeData.map( h => <HomeCardComponent data={h} key={h.uid}/>) }
            </div>
        </section>
    )
}

export { HomePage }