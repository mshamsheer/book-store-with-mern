import React, { useContext } from 'react';
import { AuthContext } from '../contact/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
            alert("Sign-out successfully");
            navigate(from, { replace: true });
        }).catch((error) => {
            console.error("Logout failed: ", error);
            alert("Sign-out failed");
        });
    }

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-600 px-8 py-2 text-white rounded' onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default LogOut;
