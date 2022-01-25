import { NavLink } from "react-router-dom";

const NavbarItemElement = ({url, children}) => {
    return(
        <li className="header__menu-item">
            <NavLink to={url} className={({isActive})=> isActive ? 'header__menu-link header__menu-link--active' : 'header__menu-link' } >{children}</NavLink>
        </li>
    )
}

export { NavbarItemElement }