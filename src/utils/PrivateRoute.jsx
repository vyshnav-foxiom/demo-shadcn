import { apiUrls } from '@/lib/utils'
import Home from '@/page/Home/Home'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const user = localStorage.getItem("user")
    const navigate = useNavigate()
    console.log("user private route", user)

    if (user === null || user === false) {
        // navigate(apiUrls.baseUrl + apiUrls.login)
        return <Navigate to={apiUrls.baseUrl + apiUrls.login} />
    }
    return children
    return (
        <div>
            {user && (
                <div>
                    {children}
                </div>
            )}

            {(user === null || user === false) && (
                <div>
                    <Navigate to={apiUrls.baseUrl + apiUrls.login} />

                </div>)
            }
        </div>
    )
}

export default PrivateRoute