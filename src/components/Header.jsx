import { NavLink } from "react-router-dom"

export default function Header() {

    return (

        <nav>

            <ul>

                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink to="/postslist">Postslist</NavLink>
                </li>

            </ul>

        </nav>

    )

}