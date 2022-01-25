import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavbarSection } from './02-sections/NavbarSection';
import { HomePage } from './01-pages/HomePage';
import { ArtworksPage } from './01-pages/ArtworksPage';
import { ArtworksSearchSection } from './02-sections/ArtworksSearchSection';
import { ArtworksTrendingSection } from './02-sections/ArtworksTrendingSection';
import { ArtworksLatestSection } from './02-sections/ArtworksLatestSection';
import { ArtworksDescriptionSection } from './02-sections/ArtworksDescriptionSection';
import { FooterSection } from './02-sections/FooterSection';
import '../scss/styles.scss'
import { ScrollToTop } from './00-helpers/ScrollToTop';

const App = () =>{
	return (
		<BrowserRouter>
			<div className='main'>
				<ScrollToTop />
				<NavbarSection />
				<Routes>
					<Route path="/" element={ <HomePage/> } />
					<Route path="/artworks" element={ <Navigate to="/artworks/trending" />} />
					<Route path="/artworks" element={ <ArtworksPage />}>
						<Route path="search/:id" element={ <ArtworksSearchSection/> } />
						<Route path="trending" element={ <ArtworksTrendingSection/> } />
						<Route path="latest" element={ <ArtworksLatestSection/> } />
						<Route path="description/:id" element={ <ArtworksDescriptionSection/> } />
					</Route>
				</Routes>
				<FooterSection />
			</div>
		</BrowserRouter>
	);
}

export default App;
