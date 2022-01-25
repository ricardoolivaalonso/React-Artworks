import { NavbarLogoElement } from "../04-elements/NavbarLogoElement"
import { NavbarItemElement } from "../04-elements/NavbarItemElement"

const NavbarSection = () => {
    return(
        <header className="header">          
            <NavbarLogoElement bg="#b50938" color="#ffffff"/>
            <ul className="header__menu">
                <NavbarItemElement url={'/'} >Home</NavbarItemElement>
                <NavbarItemElement url={'/artworks'} >Artworks</NavbarItemElement>
            </ul>
        </header>
    )
}

export { NavbarSection }