import { NavbarLogoElement } from "../04-elements/NavbarLogoElement"

const FooterSection = () => {
    return(
        <footer className="footer">
            <NavbarLogoElement bg="#ffffff" color="#000000" />
            <div className="footer__links">
                <a className="footer__link" href="https://www.instagram.com/artinstitutechi">Instagram</a>
                <a className="footer__link" href="https://twitter.com/artinstitutechi">Twitter</a>
            </div>
        </footer>
    )
}

export { FooterSection }