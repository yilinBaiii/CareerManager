import { Outlet, Link } from "react-router-dom"
import Wrapper from "../../wrappers/SharedLayout"

const SharedLayout = () => {
    return <Wrapper>
        <nav>
            <Link to='add-jobs'>add jobs </Link>
            <Link to='all-jobs'>all jobs </Link>
        </nav>
        <Outlet />
    </Wrapper>
}

export default SharedLayout