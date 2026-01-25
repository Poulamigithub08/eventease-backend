'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../api/axios';


const UserContext = createContext({
    user: null,
    loading: true,
    setUser: () => {},
    refreshUser: async () => {},
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {   
            const res = await axios.get('/auth/me');
            setUser(res.data);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, setUser, refreshUser: fetchUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);