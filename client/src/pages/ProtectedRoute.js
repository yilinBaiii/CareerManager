import { Navigate } from "react-router-dom"
import { useAppContext } from "../context/appContext"
// import Landing from '../pages/Landing'

const ProtectedRoute = ({ children }) => {
    const { user } = useAppContext()
    if (!user) {
        return <Navigate to='/Landing' />
    }
    return children
}

export default ProtectedRoute
