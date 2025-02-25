import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (

        <header>

            <nav>

                <ul>

                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>

                    <li>
                        <Link to="/posts/create">Add a new post</Link>
                    </li>

                </ul>

            </nav>

        </header>

    )

}