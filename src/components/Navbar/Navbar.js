import { name } from "../../../package.json"

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">{name}</span>
            </div>
        </nav>
    )
}

export default Navbar